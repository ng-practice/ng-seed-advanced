import { LocalStorage } from './local-storage.service';
import { Injectable, Provider } from '@angular/core';
import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private storage: LocalStorage) {}

  intercept(
    origin: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.storage.get('token');

    if (!token) {
      return next.handle(origin);
    }

    const clone = origin.clone({
      headers: origin.headers.set('Authorization', token)
    });

    return next.handle(clone);
  }
}

export function provideAuthenticationInterceptor(): Provider {
  return {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true
  };
}
