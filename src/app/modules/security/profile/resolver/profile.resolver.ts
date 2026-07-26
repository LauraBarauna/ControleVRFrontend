import { ResolveFn, Router } from '@angular/router';
import { UserModel } from '../../../../shared/models/user.model';
import { inject } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { catchError, EMPTY, of } from 'rxjs';

export const profileResolver: ResolveFn<UserModel | null> = (route, state) => {
  const profileService = inject(ProfileService);
  const router = inject(Router);
  const id = route.paramMap.get('id');

  if (!id) {
    return of(null);
  }

  return profileService.read(id).pipe(
    catchError((error) => {
      console.warn('Usuário não encontrado ou erro na busca:', error);
      return of(null);
    }),
  );
};
