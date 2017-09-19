import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from '../../models/note';

@Component({
  selector: 'awr-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  createForm: FormGroup;

  @Output() create = new EventEmitter<Note>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required]
    });
  }

  createNote() {
    const note = new Note();
    note.title = this.createForm.controls.title.value;
    note.text = this.createForm.controls.text.value;

    this.create.emit(note);
  }
}
