import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-empty-state',
  imports: [CommonModule, ButtonModule],
  templateUrl: './empty-state.html',
  styleUrl: './empty-state.css',
})
export class EmptyState {
  @Input() title: string = 'Não encontrado';
  @Input() message: string = 'O recurso que você procura não existe ou foi removido.';
  @Input() icon: string = 'pi-exclamation-circle';
  @Input() iconColor: string = 'text-gray-500';
  @Input() iconBgColor: string = 'bg-gray-50';

  @Input() buttonLabel: string = 'Voltar';
  @Input() buttonIcon: string = 'pi-arrow-left';

  @Output() onAction = new EventEmitter<void>();
}
