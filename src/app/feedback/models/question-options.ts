import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';

export interface QuestionOptions<T> {
  value?: T;
  key?: string;
  placeholder?: string;
  validators?: ValidatorFn[];
  asyncValidators?: AsyncValidatorFn[];
  order?: number;
  controlType?: string;
}
