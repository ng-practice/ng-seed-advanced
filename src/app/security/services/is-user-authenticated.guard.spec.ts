import { Location } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Route } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { LoginPage } from '../login';
import { Modal } from '../../component-library/message-modal/modal.service';
import { Authentication } from './authentication.service';
import { LocalStorage } from './local-storage.service';
import { IsUserAuthenticated } from './is-user-authenticated.guard';

import { ZOMBIE_COMPILER_PROVIDERS } from 'ngx-zombie-compiler';

const routes: Route[] = [
  {
    path: 'login',
    component: LoginPage
  }
];

describe('[Security] IsUserAuthenticated', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [LoginPage],
      schemas: [NO_ERRORS_SCHEMA],
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
    const httpEndpoint = 'http://localhost:4280/is-user-authenticated';

    it('navigates to "login"', guardedNavigation(httpEndpoint, location => {
      expect(location).toBe('/login');
    }));

    afterEach(inject([HttpTestingController], httpMock => httpMock.verify()));
  });
});

function guardedNavigation(expectedRequestUrl: string, callback: Function) {
  return inject(
    [HttpClient, HttpTestingController, IsUserAuthenticated],
    fakeAsync(
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

        tick();

        callback(TestBed.get(Location).path());
      }
    )
  );
}
