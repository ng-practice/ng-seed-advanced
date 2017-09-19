import { Note } from '../models/note';

import * as Actions from './actions';

export type Action = Actions.All;

export interface NotesSlice {
  all: Note[];
}

const initialState: NotesSlice = {
  all: []
};

export function notesReducer(slice = initialState, action: Action) {
  const nextSlice = { ...slice };

  switch (action.type) {
    case Actions.CREATE_NOTE:
      nextSlice.all = [...nextSlice.all, action.payload];
      return nextSlice;
    case Actions.LOAD_ALL_SUCCESS:
      nextSlice.all = action.payload;
      return nextSlice;
    default:
      return slice;
  }
}
