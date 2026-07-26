import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { UserModel } from '../../../../../../shared/models/user.model';
import { CommonModule } from '@angular/common';

import { roles } from '../../read-profile/read-profile';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-list-users',
  imports: [TableModule, CommonModule, TagModule, ButtonModule],
  templateUrl: './list-users.html',
  styleUrl: './list-users.css',
})
export class ListUsers {
  public users: UserModel[] = [
    {
      firstName: 'Laura',
      lastName: 'Isabela',
      username: 'la.isa',
      role: roles['ADMIN_ROLE' as keyof typeof roles],
    },
    {
      firstName: 'Sabrina',
      lastName: 'Zimmermann',
      username: 'sab.sz',
      role: roles['ROLE_USER' as keyof typeof roles],
    },
  ];
}
