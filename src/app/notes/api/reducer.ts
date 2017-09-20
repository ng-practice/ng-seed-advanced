import { LoadAllSuccess } from './actions';
import { Note } from '../models/note';

import * as Actions from './actions';

export type Action = Actions.All;

export interface NotesSlice {
  all: Note[];
}

const initialState: NotesSlice = {
  all: []
};

export function provideHandler(
  handler: { type: string; reducerFn: Function }[]
) {
  const ducks = {};

  handler.forEach(h => ducks[h.type] = h.reducerFn);

  return ducks;
}

// Maybe introduce a decorator for it. :)
const handlers = provideHandler([
  { type: Actions.LOAD_ALL_SUCCESS, reducerFn: set }
]);

export function notesReducer(slice = initialState, action: Action) {
  if (typeof handlers[action.type] === 'function') {
    return handlers[action.type](slice, action);
  }

  return slice;
}

function set(slice: NotesSlice, action: LoadAllSuccess) {
  return {
    ...slice,
    all: action.payload
  };
}
