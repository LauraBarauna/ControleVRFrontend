import {Component, OnInit, inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControlName, FormControl} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import {FormValidatorUtils} from '../../../../shared/utils/form-validator.utils';
import {UserRegisterService} from '../../services/user-register.service';
import {UserModel} from '../../../../shared/models/user.model';
import {FieldErrors} from '../../../../shared/components/field-errors/field-errors';

import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.html',
  styleUrl: './register-user.css',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    FloatLabelModule,
    FieldErrors,
    MessageModule,
    ToastModule
  ],
  providers: [UserRegisterService, MessageService]
})
export class RegisterUser implements OnInit {
  registerForm!: FormGroup;

  private messageService = inject(MessageService);

  constructor(
    private fb: FormBuilder,
    private service: UserRegisterService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', [FormValidatorUtils.requiredString, Validators.minLength(3), Validators.maxLength(50)]],
      lastName: ['', [FormValidatorUtils.requiredString, Validators.minLength(2), Validators.maxLength(100)]],
      username: ['', [FormValidatorUtils.requiredString, Validators.minLength(4), Validators.maxLength(80)]],
      password: ['', [FormValidatorUtils.requiredString, Validators.minLength(8), Validators.maxLength(16)]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const body: UserModel = {
        firstName: this.firstName.value.trim(),
        lastName: this.lastName.value.trim(),
        username: this.username.value.trim(),
        password: this.password.value,
      }

      this.service.save(body)
      .subscribe({
        next: (res) => {
        },
        error: err => console.error('Failed to create user: ', err),
      })
    }

    this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ajuste os erros do formulário.', life: 3000 });
    this.registerForm.markAllAsTouched();
  }

  public get firstName(): FormControl {
    return this.registerForm.get('firstName') as FormControl;
  }

  public get lastName(): FormControl {
    return this.registerForm.get('lastName') as FormControl;
  }

  public get username(): FormControl {
    return this.registerForm.get('username') as FormControl;
  }

  public get password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }
}
