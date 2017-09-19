import { IsUserAuthenticated } from './security/services/is-user-authenticated.guard';
import { NgModule } from '@angular/core';
import { LoadChildren, Route, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { NotFound } from './component-library';

const routes: Route[] = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'notes',
    loadChildren: './notes/notes.module#NotesModule',
    canLoad: [IsUserAuthenticated]
  },
  {
    path: 'feedback',
    loadChildren: './feedback/feedback.module#FeedbackModule',
    canLoad: [IsUserAuthenticated]
  },
  {
    path: '**',
    component: NotFound
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [IsUserAuthenticated]
})
export class AppRoutingModule { }
