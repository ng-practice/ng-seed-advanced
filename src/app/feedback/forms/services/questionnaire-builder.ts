import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { QuestionBase } from '../../models';

@Injectable()
export class QuestionnaireBuilder {
  group(questions: QuestionBase<any>[]): FormGroup {
    const controls = {};

    questions.forEach(
     question => controls[question.key] = this.control(question)
    );

    return new FormGroup(controls);
  }

  control(question: QuestionBase<any>): FormControl {
    return new FormControl(
      question.value,
      question.validators,
      question.asyncValidators
    );
  }
}
