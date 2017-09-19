import { Authentication } from './authentication.service';
import { CanLoad, Route, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class IsUserAuthenticated implements CanLoad {
  endpoint = 'http://localhost:4280';

  constructor(private authentication: Authentication, private router: Router) {}

  canLoad(route: Route): Observable<boolean> {
    return this.authentication
      .isUserAuthenticated()
      .do(isAuthenticated => isAuthenticated
            ? {}
            : this.useFallback())
      .catch(() => this.useFallback());
  }

  useFallback(): Observable<boolean> {
    this.router.navigate(['/login']);
    return Observable.of(false);
  }
}
