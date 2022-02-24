import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { PersonService } from '../services/personService';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Person } from '../models/Person';

@Injectable()
export class PersonEffect {
  savePerson$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[PERSON] saveperson'),
      mergeMap((person: Person) =>
        this.personService.save(person).pipe(
          map(() => ({
            type: '[PERSON] saveperson success'
          })),
          catchError((error) => of({ type: '[PERSON] saveperson fail' }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private personService: PersonService
  ) {}
}
