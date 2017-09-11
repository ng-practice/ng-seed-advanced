import JsonDb = require('node-json-db');

import { Note } from './model';

export class StoredNotes {
  constructor(private db: JsonDb) { }

  all(): Note[] {
    const notes = this.db.getData('/');
    return Object.keys(notes).map(guid => Object.assign(notes[guid], { guid }));
  }

  single(guid: string): Note {
    return this
      .all()
      .find(note => note.guid === guid);
  }

  searchByTitle(title: string): Note[] {
    const query = title.toLowerCase();

    return this
      .all()
      .filter(note => note.title.toLowerCase().indexOf(query) >= 0);
  }

  create(note: Note): string {
    const guid = note.guid;

    if (!guid) { return null; }

    delete note.guid;

    this.db.push(`/${guid}`, note);

    return guid;
  }

  remove(guid: string) {
    this.db.delete(`/${guid}`);
  }
}
