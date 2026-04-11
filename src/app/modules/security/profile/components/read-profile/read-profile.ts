import { Component } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';

export const roles = {
  ROLE_USER: 'Usuário',
  ADMIN_ROLE: 'Administrador',
} as const;


@Component({
  selector: 'app-read-profile',
  imports: [TagModule, DividerModule, ButtonModule, AvatarModule, CardModule],
  templateUrl: './read-profile.html',
  styleUrl: './read-profile.css',
})

export class ReadProfile {
  user = {
    id: 1,
    firstName: 'Laura',
    lastName: 'Isabela',
    username: 'laura.isabela',
    role: roles['ADMIN_ROLE'],
  };
  protected readonly roles = roles;
}
