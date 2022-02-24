import { createAction, props } from '@ngrx/store';
import { Person } from '../models/Person';

export const SAVEPERSON = createAction('[PERSON] saveperson', (payload: Person) => (payload));
export const SAVEPERSON_SUCCESS = createAction('[PERSON] saveperson success');
export const SAVEPERSON_FAIL = createAction('[PERSON] saveperson fail');
export const UPDATEFIRSTNAME = createAction('[PERSON] updatefirstname', (firstName: string) => ({firstName}));
export const UPDATELASTNAME = createAction('[PERSON] updatelastname', (lastName: string) => ({lastName}));

