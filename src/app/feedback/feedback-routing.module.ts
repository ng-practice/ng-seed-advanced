import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserQuestionnaire } from './forms/user-questionaire/user-questionaire.component';

const routes: Routes = [
  { path: 'questionnaire', component:  UserQuestionnaire}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackRoutingModule { }
