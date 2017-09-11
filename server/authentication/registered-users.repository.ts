import JsonDb = require('node-json-db');

import { hash } from '../core';
import { User } from './model';

export class RegisteredUsers {
  constructor(private db: JsonDb) { }

  byEmail(email: string): User {
    return this.db.getData(`/${email}`);
  }

  add(email: string, password: string): string {
    const user = new User(email, hash(password));

    this.db.push(`/${user.email}`, user);
    return user.email;
  }
}
