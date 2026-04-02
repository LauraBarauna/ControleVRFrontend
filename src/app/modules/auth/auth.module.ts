import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {AUTH_ROUTES} from './auth.routes';
import {RegisterUser} from './components/register-user/register-user';

@NgModule({
  imports: [
    RouterModule.forChild(AUTH_ROUTES),
    RegisterUser
  ]
})
export class AuthModule {}
