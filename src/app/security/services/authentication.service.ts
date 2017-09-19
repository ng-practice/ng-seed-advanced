import { Modal } from '../../component-library/message-modal/modal.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { LocalStorage } from './local-storage.service';

import { Observable } from 'rxjs/Observable';

import { Stranger } from '../models';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class Authentication {
  endpoint = 'http://localhost:4280';

  constructor(
    private http: HttpClient,
    private router: Router,
    private storage: LocalStorage,
    private modal: Modal
  ) {}

  signIn(stranger: Stranger) {
    return this.http
      .post<string>(`${this.endpoint}/login`, stranger)
      .do(token => this.storage.set('token', token))
      .do(() =>
        this.router.navigate(['/notes']))
      .catch(() => {
          this.modal.open(
            'Uups',
            'You entered the wrong password or email',
            'warn'
          );

          return Observable.empty();
        });
  }

  register(stranger: Stranger) {
    return this.http
      .post(`${this.endpoint}/register`, stranger);
  }

  isUserAuthenticated(): Observable<boolean> {
    return this.http
      .get<boolean>(`${this.endpoint}/is-user-authenticated`)
      .catch(() => Observable.of(false));
  }
}
