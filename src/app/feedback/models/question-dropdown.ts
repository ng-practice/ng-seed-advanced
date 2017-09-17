import { QuestionOptions } from './question-options';
import { QuestionBase } from './question-base';

export class QuestionDropdown extends QuestionBase<string> {
  controlType = 'dropdown';
  options: { key: string; value: string }[];

  constructor(
    questionOptions: QuestionOptions<string> = {},
    options: { key: string; value: string }[]
  ) {
    super(questionOptions);
    this.options = options || [];
  }
}
