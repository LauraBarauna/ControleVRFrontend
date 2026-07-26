import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { UserModel } from '../../../../../../shared/models/user.model';
import { CommonModule } from '@angular/common';

import { roles } from '../../read-profile/read-profile';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ProfileService } from '../../../services/profile.service';
import { FilterMatchMode } from 'primeng/api';


@Component({
  selector: 'app-list-users',
  imports: [TableModule, CommonModule, TagModule, ButtonModule],
  templateUrl: './list-users.html',
  styleUrl: './list-users.css',
})
export class ListUsers implements OnInit {
  public users!: UserModel[];

  constructor(
    private service: ProfileService,
    private crf: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.service.list().subscribe({
      next: (res) => {
        const users = res.content;
        users.forEach((user) => {
          user.role = roles[user.role as keyof typeof roles];
        });
        this.users = users;
        this.crf.detectChanges();
      },
    });
  }
}
