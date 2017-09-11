import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoot } from './app.component';

@NgModule({
  declarations: [
    AppRoot
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppRoot]
})
export class AppModule { }
