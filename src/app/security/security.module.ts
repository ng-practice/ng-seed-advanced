import { provideAuthenticationInterceptor } from './services/authentication.interceptor';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdInputModule, MdButtonModule } from '@angular/material';

import { ComponentLibraryModule } from '../component-library';
import { SecurityRoutingModule } from './security-routing.module';

import { LocalStorage } from './services/local-storage.service';

import { LoginPage, LoginDialog } from './login';
import { RegisterDialog, RegisterPage } from './registration';

import { Authentication } from './services/authentication.service';
import { EmailTaken } from './validators/email-taken.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,

    MdInputModule,
    MdButtonModule,

    ComponentLibraryModule,

    SecurityRoutingModule
  ],
  declarations: [
    LoginPage,
    LoginDialog,
    RegisterPage,
    RegisterDialog
  ]
})
export class SecurityModule {
  static forRoot(config: SignInConfig): ModuleWithProviders {
    return {
      ngModule: SecurityModule,
      providers: [
        LocalStorage,
        Authentication,
        EmailTaken,
        provideAuthenticationInterceptor()
      ]
    };
  }
}

export interface SignInConfig {
  targetUrlAfterSigningIn: string[];
}
