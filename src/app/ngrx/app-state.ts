import { NotesSlice } from '../notes/api';

export interface AppState {
  notes: {
    models: NotesSlice
  };
}
