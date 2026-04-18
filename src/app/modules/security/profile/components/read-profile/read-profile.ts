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
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.read(id).subscribe({
        next: (res) => {
          this.user = {
            id: res.id,
            firstName: res.firstName,
            lastName: res.lastName,
            username: res.username,
            role: roles[res.role as keyof typeof roles],
          };
          this.crf.detectChanges();
        },
      });
    }
  }
}
