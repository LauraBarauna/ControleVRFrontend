import { Routes } from '@angular/router';
import { ReadProfile } from './components/read-profile/read-profile';

export const PROFILE_ROUTES: Routes = [
  {
    path: ':id',
    component: ReadProfile
  }
];
