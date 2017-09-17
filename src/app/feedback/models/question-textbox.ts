import { QuestionOptions } from './question-options';
import { QuestionBase } from './question-base';
import { InputType } from './input-type';

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: QuestionOptions<string> = {}, type: InputType) {
    super(options);
    this.type = type || '';
  }
}
