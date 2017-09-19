import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Note } from './models/note';

@Injectable()
export class NotesStock {
  private endpoint = 'http://localhost:4280';

  constructor(private http: HttpClient) {}

  all(): Observable<Note[]> {
    return this.http
      .get<Note[]>(`${this.endpoint}/notes/all`);
  }
}
