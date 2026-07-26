import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { UserModel } from '../../../../../shared/models/user.model';
import { EmptyState } from '../../../../../shared/components/empty-state/empty-state';
import { Location } from '@angular/common';

export const roles = {
  ROLE_USER: 'Usuário',
  ADMIN_ROLE: 'Administrador',
} as const;

@Component({
  selector: 'app-read-profile',
  imports: [TagModule, DividerModule, ButtonModule, AvatarModule, CardModule, EmptyState],
  templateUrl: './read-profile.html',
  styleUrl: './read-profile.css',
  providers: [ProfileService],
})
export class ReadProfile implements OnInit {
  user!: UserModel;

  constructor(
    private route: ActivatedRoute,
    private service: ProfileService,
    private crf: ChangeDetectorRef,
    private location: Location
  ) {}

  ngOnInit() {
    const user = this.route.snapshot.data['user'];

    if (user) {
      user.role = roles[user.role as keyof typeof roles];
      this.user = user;
    }


  }

  back() {
    this.location.back();
  }
}
