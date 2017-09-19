import { CoreModule } from './core/core.module';
import { NavigationModule } from './navigation/navigation.module';
import { SecurityModule } from './security/security.module';
import { FeedbackModule } from './feedback/feedback.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoot } from './app.component';

@NgModule({
  declarations: [AppRoot],
  imports: [
    BrowserModule,

    CoreModule,

    SecurityModule.forRoot({ targetUrlAfterSigningIn: ['/notes'] }),

    NavigationModule,
    FeedbackModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppRoot]
})
export class AppModule {}
