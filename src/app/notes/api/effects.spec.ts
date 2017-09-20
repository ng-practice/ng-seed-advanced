import { LoadAll, LoadAllSuccess } from './actions';
import { NotesEffects } from './effects';
import { hot } from 'jasmine-marbles';

import { Actions } from '@ngrx/effects';

import { of } from 'rxjs/observable/of';

describe('[Note] Effects', () => {
  describe('When notes loaded successfully', () => {
    it('the action LOAD_ALL_SUCCESS is raised', () => {
      const actions$ = new Actions(hot('-n-', { n: new LoadAll() }));
      const notesService = provideNotesService();
      const effects = new NotesEffects(actions$, notesService);

      expect(effects.loadAll).toBeObservable(
        hot('-a-', { a: new LoadAllSuccess([]) })
      );
    });
  });
});

function provideNotesService() {
  const service = jasmine.createSpyObj('notesService', ['all']);

  service.all.and.returnValue(of([]));

  return service;
}
