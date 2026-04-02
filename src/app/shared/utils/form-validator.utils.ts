import {ValidatorFn} from '@angular/forms';

export class FormValidatorUtils {
  static requiredString: ValidatorFn = (control) => {
    const value = control.value;

    if (value === null || value === undefined) {
      return { required: true };
    }

    if (typeof value === 'string' && value.trim().length === 0) {
      return { required: true };
    }

    return null;
  };

}
