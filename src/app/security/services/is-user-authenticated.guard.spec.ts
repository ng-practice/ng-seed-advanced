import { inject, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { Modal } from '../../component-library/message-modal/modal.service';
import { Authentication } from './authentication.service';
import { LocalStorage } from './local-storage.service';
import { IsUserAuthenticated } from './is-user-authenticated.guard';

import { ZOMBIE_COMPILER_PROVIDERS } from 'ngx-zombie-compiler';

describe('[Security] IsUserAuthenticated', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        IsUserAuthenticated,
        Authentication,
        LocalStorage,
        {
          provide: Modal,
          useFactory() {
            return { open: () => {} };
          }
        }
      ]
    }).configureCompiler({
      providers: ZOMBIE_COMPILER_PROVIDERS
    });
  });

  describe('When a user is not authenticated', () => {
    it(
      '"false" is returned',
      inject(
        [HttpClient, HttpTestingController, IsUserAuthenticated],
        (
          http: HttpClient,
          httpMock: HttpTestingController,
          guard: IsUserAuthenticated
        ) => {
          guard
            .canLoad({})
            .subscribe(isAuthenticated => expect(isAuthenticated).toBe(false));

          const request = httpMock.expectOne(
            'http://localhost:4280/is-user-authenticated'
          );

          request.flush({ isAuthenticated: false });
        }
      )
    );

    afterEach(
      inject([HttpTestingController], (httpMock: HttpTestingController) => {
        httpMock.verify();
      })
    );
  });
});
