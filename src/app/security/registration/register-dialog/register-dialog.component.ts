import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Stranger } from '../../models';

@Component({
  selector: 'awr-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialog {
  register = new FormGroup({});

  @Output() submit = new EventEmitter<Stranger>();
}
