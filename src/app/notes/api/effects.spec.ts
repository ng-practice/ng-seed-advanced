import { Actions } from '@ngrx/effects';

import { hot } from 'jasmine-marbles';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { of } from 'rxjs/observable/of';

import { LoadAll, LoadAllError, LoadAllSuccess } from './actions';
import { NotesEffects } from './effects';

/** Docs: https://github.com/ReactiveX/rxjs/blob/master/doc/writing-marble-tests.md */

describe('[Notes] Effects', () => {
  describe('When notes loaded successfully', () => {
    it('the action LOAD_ALL_SUCCESS is raised', () => {
      const actions$ = new Actions(hot('-a-', { a: new LoadAll() }));
      const service = stubNotesStock(of([]));
      const effects = new NotesEffects(actions$, service);

      expect(effects.loadAll$).toBeObservable(
        hot('-a-', {
          a: new LoadAllSuccess([])
        })
      );
    });

    describe('When loading of notes fails', () => {
      it('the action LOAD_ALL_ERROR is raised', () => {
        const actions$ = new Actions(hot('-a-', { a: new LoadAll() }));
        const service = stubNotesStock(Observable.throw(''));
        const effects = new NotesEffects(actions$, service);

        expect(effects.loadAll$).toBeObservable(
          hot('-a-', {
            a: new LoadAllError()
          })
        );
      });
    });
  });
});

function stubNotesStock(value: Observable<any>) {
  const service = jasmine.createSpyObj('notesStock', ['all']);

  service.all.and.returnValue(value);

  return service;
}
