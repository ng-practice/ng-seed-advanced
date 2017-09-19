import { NotesEffects } from './api/effects';
import { EffectsModule } from '@ngrx/effects';
import { ComponentLibraryModule } from '../component-library';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';

import { NotesGrid, NoteCard } from './board';
import { NoteFormComponent } from './board/note-form/note-form.component';
import { notesReducer } from './api';

import { ReactiveFormsModule } from '@angular/forms';
import {
  MdInputModule,
  MdButtonModule,
  MdProgressSpinnerModule
} from '@angular/material';

import { NotesStock } from './notes.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    StoreModule.forFeature('notes', {
      models: notesReducer
    }),
    EffectsModule.forFeature([NotesEffects]),

    MdInputModule,
    MdButtonModule,
    MdProgressSpinnerModule,

    ComponentLibraryModule,

    NotesRoutingModule
  ],
  providers: [NotesStock],
  declarations: [NotesGrid, NoteCard, NoteFormComponent]
})
export class NotesModule { }
