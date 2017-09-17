import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Stranger } from '../../models';

@Component({
  selector: 'awr-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialog {
  @Output() submit = new EventEmitter<Stranger>();

  login: FormGroup;

  constructor(private fb: FormBuilder) {
    this.provideEmptyLoginForm();
  }

  provideEmptyLoginForm() {
    this.login = this.fb.group({
      email: ['',   [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submitCredentials() {
    const candidate = new Stranger(
      this.login.controls.email.value,
      this.login.controls.password.value
    );

    this.submit.emit(candidate);
    this.login.controls.password.reset();
  }
}
