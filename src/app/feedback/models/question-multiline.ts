import { QuestionOptions } from './question-options';
import { QuestionBase } from './question-base';
import { InputType } from './input-type';

export class MultilineQuestion extends QuestionBase<string> {
  controlType = 'multiline';
  type: string;

  constructor(options: QuestionOptions<string> = {}) {
    super(options);
  }
}
