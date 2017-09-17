import { NgModule } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { NotFound } from './component-library';

const routes: Route[] = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFound
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
