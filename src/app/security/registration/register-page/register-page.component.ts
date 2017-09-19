import { TitleBus } from '../../../core/title.bus';
import { Component } from '@angular/core';

import { Stranger } from '../../models';

@Component({
  selector: 'awr-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPage {
  constructor(private titleBus: TitleBus) {
    this.titleBus.set('Register | Aware');
  }
}
