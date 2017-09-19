import { FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { FeedbackQuestions } from '../../models/feedback-questions';
import { QuestionBase } from '../../models/question-base';
import { QuestionnaireBuilder } from '../services/questionnaire-builder';


@Component({
  selector: 'awr-user-questionaire',
  templateUrl: './user-questionaire.component.html',
  styleUrls: ['./user-questionaire.component.scss']
})
export class UserQuestionnaire implements OnInit {
  questions: QuestionBase<any>[];
  questionnaire: FormGroup;

  constructor(private qb: QuestionnaireBuilder) {}

  ngOnInit() {
    this.questions = FeedbackQuestions.all();
    this.questionnaire = this.qb.group(this.questions);
  }

  submit() {
    console.log(this.questionnaire.value);
  }
}
