import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { CommonModule } from '@angular/common';
import {UserModel} from '../../../../shared/models/user.model';

@Component({
  selector: 'app-list-users',
  imports: [TableModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, CommonModule],
  templateUrl: './list-users.html',
  styleUrl: './list-users.css',
})
export class ListUsers {
  users !: UserModel[];
  loading: boolean = false;
}
