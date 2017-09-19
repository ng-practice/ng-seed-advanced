import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import * as Action from './actions';

import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';

import { NotesStock } from '../notes.service';

@Injectable()
export class NotesEffects {
  @Effect()
  loadAll = this.action$
    .ofType(Action.LOAD_ALL)
    .exhaustMap(action =>
      this.notesStock
        .all()
        .map(notes => new Action.LoadAllSuccess(notes))
      );

  constructor(
    private action$: Actions,
    private notesStock: NotesStock
  ) {}
}
