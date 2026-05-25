import { Routes } from '@angular/router';
import {ListUsers} from './components/list-users/list-users';

export const USERS_ROUTES: Routes = [
  {
    path: 'all',
    component: ListUsers
  }
];
