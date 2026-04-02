import {RegisterUser} from './components/register-user/register-user';
import {Routes} from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: 'register',
    component: RegisterUser
  }
]
