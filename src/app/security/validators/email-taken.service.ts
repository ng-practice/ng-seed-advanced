import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Authentication } from '../services/authentication.service';

@Injectable()
export class EmailTaken implements AsyncValidator {
  constructor(private authentication: Authentication) { }

  public validate(c: AbstractControl): Observable<ValidationErrors | null> {
    return this.authentication
      .isEmailTaken(c.value)
      .debounceTime(200)
      .distinctUntilChanged()
      .map(isEmailTaken => isEmailTaken
        ? { emailTaken: true }
        : null)
      .catch(() => of({ emailTaken: true }));
  }
}
