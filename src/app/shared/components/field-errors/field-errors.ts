import { Component, Input } from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {ERROR_MESSAGES} from '../../constants/error_messages.const';

@Component({
  selector: 'app-field-errors',
  imports: [],
  template: `
    @if (shouldShowErrors()) {
      <div class="text-red-500 text-xs md:text-sm mt-1 font-medium animate-fade-in leading-tight">
        {{ getErrorMessage() }}
      </div>
    }
  `,
  styleUrl: './field-errors.css',
})
export class FieldErrors {
  @Input() control !: AbstractControl | null;

  shouldShowErrors(): boolean {
    return !!(this.control && this.control.invalid && (this.control.dirty || this.control.touched));
  }

  getErrorMessage(): string {
    if (!this.control || !this.control.errors) return '';

    const firstErrorKey = Object.keys(this.control.errors)[0];
    const errorData = this.control.errors[firstErrorKey];

    return ERROR_MESSAGES[firstErrorKey]
      ? ERROR_MESSAGES[firstErrorKey](errorData)
      : 'Campo inválido';
  }

}
