import { Action } from '@ngrx/store';

import { Note } from '../models/note';

export const CREATE_NOTE = '[Notes] create new note';
export const LOAD_ALL = '[Notes] load all notes';
export const LOAD_ALL_SUCCESS = '[Notes] all notes loaded successfully';

export class CreateNote implements Action {
  readonly type = CREATE_NOTE;

  constructor(public payload: Note) {}
}

export class LoadAll implements Action {
  readonly type = LOAD_ALL;
}

export class LoadAllSuccess implements Action {
  readonly type = LOAD_ALL_SUCCESS;

  constructor(public payload: Note[]) {}
}

export type All
 = CreateNote
 | LoadAll
 | LoadAllSuccess;
