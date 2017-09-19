import { DebugElement, NO_ERRORS_SCHEMA  } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZOMBIE_COMPILER_PROVIDERS } from 'ngx-zombie-compiler';

import { NoteFormComponent } from './note-form.component';

const getTestBed = () =>
  TestBed.configureTestingModule({
    declarations: [NoteFormComponent],
    imports: [ReactiveFormsModule],
    schemas: [NO_ERRORS_SCHEMA]
  });

describe('Component: NoteForm', () => {
  let fixture: ComponentFixture<NoteFormComponent>;
  let noteForm: NoteFormComponent;
  let emailInput: DebugElement;

  beforeEach(() => {
    getTestBed()
      .configureCompiler({
        /** https://gist.github.com/Quramy/1dd5bed0bce1e7f34b79184453d1790f */
        providers: ZOMBIE_COMPILER_PROVIDERS
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteFormComponent);
    noteForm = fixture.componentInstance;
  });

  describe('When no title is set', () => {
    it('the title field has an error', () => {
      emailInput = fixture.debugElement.query(
        By.css('[formControlName=title]')
      );

      emailInput.nativeElement.value = '';

      fixture.detectChanges();

      expect(noteForm.createForm.controls.title.hasError('required')).toBe(true);
    });
  });
});
