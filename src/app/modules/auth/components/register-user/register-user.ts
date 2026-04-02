import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';

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
      firstName: ['', Validators.required, Validators.minLength(3), Validators.maxLength(50)],
      lastName: ['', Validators.required, Validators.minLength(2), Validators.maxLength(100)],
      username: ['', Validators.required, Validators.minLength(4), Validators.maxLength(80)],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {

    }
  }
}
