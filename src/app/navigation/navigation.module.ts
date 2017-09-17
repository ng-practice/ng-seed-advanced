import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdToolbarModule, MdIconModule } from '@angular/material';

import { TopNav } from './top-nav/top-nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    MdToolbarModule,
    MdIconModule
  ],
  declarations: [TopNav],
  exports: [TopNav]
})
export class NavigationModule { }
