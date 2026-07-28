import {RegisterUser} from './components/register-user/register-user';
import {Routes} from '@angular/router';
import {LoginUser} from './components/login-user/login-user';

export const AUTH_ROUTES: Routes = [
  {
    path: 'register',
    component: RegisterUser
  },
  {
    path: 'login',
    component: LoginUser
  }
]
