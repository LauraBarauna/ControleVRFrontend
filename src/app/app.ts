import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Toast} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {Sidebar} from './shared/components/sidebar/sidebar';



@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RouterOutlet, Toast, Sidebar],
  providers: [MessageService]
})
export class App {
}
