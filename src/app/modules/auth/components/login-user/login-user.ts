import {Component, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {FieldErrors} from "../../../../shared/components/field-errors/field-errors";
import {FloatLabelModule} from "primeng/floatlabel";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {CommonModule} from '@angular/common';
import {MessageModule} from 'primeng/message';
import {FormValidatorUtils} from '../../../../shared/utils/form-validator.utils';
import {LoginModel} from '../../models/login.model';
import {MessageService} from 'primeng/api';
import {UserLoginService} from '../../services/user-login.service';
import { HttpErrorResponse } from '@angular/common/http';
import {TokenService} from '../../../../shared/services/token/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-user',
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
  providers: [UserLoginService],
  templateUrl: './login-user.html',
  styleUrl: './login-user.css',
})
export class LoginUser implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private service: UserLoginService,
    private tokenService: TokenService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [FormValidatorUtils.requiredString]],
      password: ['', [FormValidatorUtils.requiredString]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const body: LoginModel = {
        username: this.username.value,
        password: this.password.value
      }

      this.service.login(body).subscribe({
        next: (res) => {
          this.tokenService.setToken(res.token);
          this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Usuário autenticado com sucesso!',
            life: 1000
          });
          this.router.navigate(['/app/profile/users']);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
          const backendMessage = err.error.errors.auth;
          this.messageService.add({
            severity: 'error',
            summary: 'Erro ao fazer login',
            detail: typeof backendMessage === 'string' ? backendMessage : 'Usuário ou senha inválidos.',
            life: 1500
          });
        }
      })
    }
  }

  public get username(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  public get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
}
