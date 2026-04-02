import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import {FormValidatorUtils} from '../../../../shared/utils/form-validator.utils';

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
    FloatLabelModule
  ],
})
export class RegisterUser implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', FormValidatorUtils.requiredString, Validators.minLength(3), Validators.maxLength(50)],
      lastName: ['', FormValidatorUtils.requiredString, Validators.minLength(2), Validators.maxLength(100)],
      username: ['', FormValidatorUtils.requiredString, Validators.minLength(4), Validators.maxLength(80)],
      password: ['', [FormValidatorUtils.requiredString, Validators.minLength(8), Validators.maxLength(16)]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {

    }
  }
}
