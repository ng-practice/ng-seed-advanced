import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/note';

import { AppState } from '../../../ngrx';

import * as Action from '../../api/actions';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'awr-notes-grid',
  templateUrl: './notes-grid.component.html',
  styleUrls: ['./notes-grid.component.scss']
})
export class NotesGrid implements OnInit {
  notes$: Observable<Note[]>;

  constructor(private store: Store<AppState>) {
    this.notes$ = this
      .store
      .select(state => state.notes.models.all)
      .debounceTime(2000);
  }

  ngOnInit() {
    this.store.dispatch(new Action.LoadAll());
  }

  createNote(note: Note) {
    this.store.dispatch(new Action.CreateNote(note));
  }
}
