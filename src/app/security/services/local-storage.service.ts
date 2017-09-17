import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorage {
  get(key: string) {
    return window.localStorage.getItem(key);
  }

  set(key: string, value: string) {
    window.localStorage.setItem(key, value);
  }

  remove(key: string) {
    window.localStorage.removeItem(key);
  }
}
