import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {USERS_ROUTES} from './users.routes';
import {ListUsers} from './components/list-users/list-users';

@NgModule({
  imports: [
    RouterModule.forChild(USERS_ROUTES),
    ListUsers
  ]
})
export class ProfileModule {}
