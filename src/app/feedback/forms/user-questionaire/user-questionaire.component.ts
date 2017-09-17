import { FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { FeedbackQuestions } from '../../models/feedback-questions';
import { QuestionBase } from '../../models/question-base';


@Component({
  selector: 'awr-user-questionaire',
  templateUrl: './user-questionaire.component.html',
  styleUrls: ['./user-questionaire.component.scss']
})
export class UserQuestionnaire implements OnInit {
  questions: QuestionBase<any>[];
  questionnaire = new FormGroup({});

  ngOnInit() {
    this.questions = FeedbackQuestions.all();
  }

  submit() {
    console.log(this.questionnaire.value);
  }
}
