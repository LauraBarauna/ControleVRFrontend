import { Routes } from '@angular/router';
import {MainLayout} from './shared/layouts/main-layout/main-layout';
import {authGuard} from './shared/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'app',
    component: MainLayout,
    canActivate: [authGuard],
    children: [
      {
        path: 'profile',
        loadChildren: () => import('./modules/security/profile/profile.module').then(m => m.ProfileModule)
      }
    ]
  },
];
