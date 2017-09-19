import { Authentication } from '../../services/authentication.service';
import { Component } from '@angular/core';

import { Stranger } from '../../models';

import { TitleBus } from '../../../core/title.bus';

@Component({
  selector: 'awr-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPage {
  constructor(
    private authentication: Authentication,
    private titleBus: TitleBus) {
      this.titleBus.set('Login | Aware');
    }

  signIn(stranger: Stranger) {
    this.authentication
      .signIn(stranger)
      .subscribe();
  }
}
