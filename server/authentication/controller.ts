import { Router, Request, Response } from 'express';

import JsonDb = require('node-json-db');
import jwt = require('jsonwebtoken');

import { hash } from '../core';

import { RegisteredUsers } from './registered-users.repository';
const db = new JsonDb(`${__dirname}/users.json`, true, true);

import { User } from './model';

export class Authentication {
  options = { algorithm: 'HS256', expiresIn: '3 days' };

  constructor(
    private secret: string,
    public routes = Router(),
    public users = new RegisteredUsers(db)) {

    this.routes.post('/login', this.login);
    this.routes.post('/register', this.register);
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
    if (user.email &&
        user.password === user.confirmedPassword) {

      this.users.add(user.email, user.password);

      return res.send(`Congratulations! ${user.email} has been ` +
                      'registered successfully.');
    }

    return res.status(405).send('Uups, something went wrong. We are sorry.');
  }

  private token(email: string) {
    return jwt.sign(
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
