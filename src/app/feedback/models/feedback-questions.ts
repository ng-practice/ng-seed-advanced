import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { Validators } from '@angular/forms';
import { QuestionDropdown } from './question-dropdown';

export class FeedbackQuestions {
  static all(): QuestionBase<any>[] {
    const questions = [
      new QuestionDropdown(
        {
          key: 'subject',
          placeholder: 'Subject...',
          validators: [Validators.required],
          order: 1
        },
        [
          { key: 'infrastructure', value: 'IT Infrastructure' },
          { key: 'sales', value: 'Sales Question' }
        ]
      ),
      new TextboxQuestion(
        {
          key: 'firstName',
          placeholder: 'First name',
          validators: [Validators.required],
          order: 2
        },
        'text'
      ),
      new TextboxQuestion(
        {
          key: 'question',
          placeholder: 'Type your question',
          validators: [Validators.required],
          order: 3
        },
        'text'
      )
    ];

    return questions.sort((current, next) => current.order - next.order);
  }
}
