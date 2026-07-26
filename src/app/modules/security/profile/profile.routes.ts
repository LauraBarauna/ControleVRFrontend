import { Routes } from '@angular/router';
import { ReadProfile } from './components/read-profile/read-profile';
import { ListUsers } from './components/users/list-users/list-users';
import { profileResolver } from './resolver/profile.resolver';

export const PROFILE_ROUTES: Routes = [
  {
    path: 'users/:id',
    component: ReadProfile,
    resolve: {
      user: profileResolver,
    },
  },
  {
    path: 'users',
    component: ListUsers,
  },
];
