import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../../models';

@Component({
  selector: 'awr-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestion {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}
