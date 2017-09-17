import { Router, Request, Response } from 'express';

import JsonDb = require('node-json-db');
import jwt = require('jsonwebtoken');

import { hash } from '../core';

import { RegisteredUsers } from './registered-users.repository';
const db = new JsonDb(`${__dirname}/users.json`, true, true);

import { User } from './model';

export class Authentication {
  options = { algorithm: 'HS256', expiresIn: '3 days' };
  prefix = 'Bearer ';

  constructor(
    private secret: string,
    public routes = Router(),
    public users = new RegisteredUsers(db)) {

    this.routes.post('/login', this.login);
    this.routes.post('/register', this.register);
    this.routes.get('/is-email-taken/:email', this.isEmailTaken);
    this.routes.get('/is-user-authenticated', this.isUserAuthenticated);
  }

  login = ({ body: candidate }: Request, res: Response) => {
    const user = this.users.byEmail(candidate.email);

    if (user && user.password === hash(candidate.password)) {
      res.status(200).json(this.token(candidate.userName));
    } else {
      res.status(403).send();
    }
  }

  register = ({ body: user }: Request, res: Response) => {
    if (user.email && user.password) {
      this.users.add(user.email, user.password);

      return res.send({
        message: `Congratulations! ${user.email} has been ` +
                 'registered successfully.'
      });
    }

    return res.status(405).send({
      message: 'Uups, something went wrong. We are sorry.'
    });
  }

  isEmailTaken = ({ params }: Request, res: Response) => {
    try {
      this.users.byEmail(params.email);
      return res.send(true);
    } catch {
      res.send(false);
    }
  }

  isUserAuthenticated = (req: Request, res: Response) => {
    res.send(true);
  }

  private token(email: string) {
    return this.prefix +
           jwt.sign(
             this.createPayload(email),
             this.secret,
             this.options
           );
  }

  private createPayload(email: string) {
    return {
      email,
      role: 'member'
    };
  }
}
