import { ValidatorFn, AsyncValidatorFn } from '@angular/forms';

import { QuestionOptions } from './question-options';

export class QuestionBase<T> {
  value: T;
  key: string;
  placeholder: string;
  validators: ValidatorFn[];
  asyncValidators: AsyncValidatorFn[];
  order: number;
  controlType: string;

  constructor(options: QuestionOptions<T> = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.placeholder = options.placeholder || '';
    this.validators = options.validators || [];
    this.asyncValidators = options.asyncValidators || [];
    this.order = !!options.order ? options.order : 1;
    this.controlType = options.controlType || '';
  }
}
