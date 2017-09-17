import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';

import { NotesGrid, NoteCard } from './board';

@NgModule({
  imports: [
    CommonModule,

    NotesRoutingModule
  ],
  declarations: [NotesGrid, NoteCard]
})
export class NotesModule { }
