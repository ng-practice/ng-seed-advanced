import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { NotesGrid } from './board';

const routes: Route[] = [
  { path: '', redirectTo: 'board', pathMatch: 'full' },
  { path: 'board', component: NotesGrid }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
