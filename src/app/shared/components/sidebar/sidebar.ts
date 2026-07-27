import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';

import { DrawerModule } from 'primeng/drawer';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterModule,
    DrawerModule,
    PanelMenuModule,
    ButtonModule
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  private router = inject(Router);
  visible: boolean = false;

  menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Início',
        icon: 'pi pi-home',
        command: () => this.navigateTo('/app/dashboard')
      },
      {
        label: 'Usuários',
        icon: 'pi pi-users',
        items: [
          {
            label: 'Listar Perfis',
            icon: 'pi pi-list',
            command: () => this.navigateTo('/app/profile/users')
          },
          {
            label: 'Novo Usuário',
            icon: 'pi pi-user-plus',
            command: () => this.navigateTo('/app/profile/users/create')
          }
        ]
      },
      {
        label: 'Configurações',
        icon: 'pi pi-cog',
        command: () => this.navigateTo('/app/settings')
      }
    ];
  }

  toggle() {
    this.visible = !this.visible;
  }

  private navigateTo(route: string) {
    this.visible = false;
    this.router.navigate([route]);
  }

}
