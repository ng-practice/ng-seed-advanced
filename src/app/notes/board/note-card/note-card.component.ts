import { Component, Input } from '@angular/core';

import { Note } from '../../models/note';

@Component({
  selector: 'awr-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCard {
  @Input() note: Note;
}
