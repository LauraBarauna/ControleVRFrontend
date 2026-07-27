import { Component, OnInit } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { UserModel } from '../../../../../shared/models/user.model';
import { EmptyState } from '../../../../../shared/components/empty-state/empty-state';
import { Location } from '@angular/common';
import {OriginRouteProfile} from '../../models/profile.types';
import {FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import {FieldErrors} from '../../../../../shared/components/field-errors/field-errors';
import {UserEditModel} from '../../models/user-edit.model';

export const roles = {
  ROLE_USER: 'Usuário',
  ADMIN_ROLE: 'Administrador',
} as const;

@Component({
  selector: 'app-read-profile',
  imports: [
    TagModule,
    DividerModule,
    ButtonModule,
    AvatarModule,
    CardModule,
    EmptyState,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    FieldErrors,
    RouterLink
  ],

  templateUrl: './read-profile.html',
  styleUrl: './read-profile.css',
  providers: [ProfileService],
})
export class ReadProfile implements OnInit {
  user!: UserModel;
  originRoute!: OriginRouteProfile;
  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private service: ProfileService,
    private router: Router,
    private location: Location,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    const user = this.route.snapshot.data['user'];
    this.originRoute = this.route.snapshot.data['originRoute'];

    if (user) {
      this.createForm();

      user.role = roles[user.role as keyof typeof roles];

      this.user = user;
      this.form.patchValue(user);
      this.listeners();
    }
  }

  update() {
    const formValues = this.form.value;

    const body: UserEditModel = {};

    if (formValues.password) {
      body.password = formValues.password;
    }

    if (formValues.firstName !== this.user.firstName) {
      body.firstName = formValues.firstName;
    }

    if (formValues.lastName !== this.user.lastName) {
      body.lastName = formValues.lastName;
    }

    if (formValues.username !== this.user.username) {
      body.username = formValues.username;
    }

    this.service.save(body, this.user.id).subscribe({
      next: (res) => {
        console.log("Atualizado", res);
        this.router.navigate(['/app//profile/users']);
      }
    });
  }

  createForm() {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.minLength(3), Validators.maxLength(50)]],
      lastName: ['', [Validators.minLength(2), Validators.maxLength(100)]],
      username: ['', [Validators.minLength(4), Validators.maxLength(80)]],
      password: ['', [Validators.minLength(8), Validators.maxLength(16)]],
    })
  }

  listeners() {
    this.firstName?.valueChanges.subscribe((value) => {
      this.updateUsername();
    })
    this.lastName?.valueChanges.subscribe((value) => {
      this.updateUsername();
    })
  }

  back() {
    this.location.back();
  }

  resetForm() {
    if (this.user) {
      this.form.patchValue(this.user);
    }
  }

  private updateUsername() {
    if (this.isEdit) {
      this.userName?.patchValue(this.usernameGenerator, { emitEvent: false });
    }
  }

  public get avatar(): string {
    const firstName = this.firstName?.value;
    const lastName = this.lastName?.value;

    return firstName[0].toUpperCase() + lastName[0].toUpperCase();
  }

  public get usernameGenerator():string {
    const first = (this.firstName?.value || '').trim();
    const last = (this.lastName?.value || '').trim();

    if (!first && !last) return '';
    const formattedFirst = first.replace(/\s+/g, '.');
    const formattedLast = last.replace(/\s+/g, '.');

    return `${formattedFirst}.${formattedLast}`.toLowerCase();
  }

  public get isView(): boolean {
    return this.originRoute === 'view';
  }

  public get isEdit(): boolean {
    return this.originRoute === 'edit';
  }

  public get firstName() {
    return this.form.get('firstName');
  }

  public get lastName() {
    return this.form.get('lastName');
  }

  public get userName() {
    return this.form.get('username');
  }

  public get password() {
    return this.form.get('password');
  }
}
