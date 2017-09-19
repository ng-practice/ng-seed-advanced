import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Stranger } from '../../models';
import { Authentication } from '../../services/authentication.service';

@Component({
  selector: 'awr-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialog {
  register: FormGroup;

  @Output() submit = new EventEmitter<Stranger>();

  constructor(
    private fb: FormBuilder,
    private authentication: Authentication) {
    this.provideEmptyForm();
  }

  provideEmptyForm() {
    this.register = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  registerUser() {
    const stranger = new Stranger(
      this.register.controls.email.value,
      this.register.controls.password.value,
    );

    return this.authentication
      .register(stranger)
      .subscribe();
  }
}
