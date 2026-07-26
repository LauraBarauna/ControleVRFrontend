import { Routes } from '@angular/router';
import { ReadProfile } from './components/read-profile/read-profile';
import { ListUsers } from './components/users/list-users/list-users';

export const PROFILE_ROUTES: Routes = [
  {
    path: 'users/:id',
    component: ReadProfile
  },
  {
    path: 'users',
    component: ListUsers
  }
];
