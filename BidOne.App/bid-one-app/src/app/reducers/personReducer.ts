import { createReducer, on, State, Action } from '@ngrx/store';
import { IPersonState, AppState } from '../states/personState';
import { SAVEPERSON_SUCCESS, SAVEPERSON_FAIL, SAVEPERSON, UPDATEFIRSTNAME, UPDATELASTNAME } from '../actions/PersonActions';

export const initialState: IPersonState = {firstName: '', lastName: ''};

const personReducer = createReducer(initialState,
    on(SAVEPERSON_SUCCESS, (state) => ({...state, firstName: '', lastName: ''})),
    on(UPDATEFIRSTNAME, (state, payload) => ({...state, firstName: payload.firstName})),
    on(UPDATELASTNAME, (state, payload) => ({...state, lastName: payload.lastName}))
);

export function reducer(state: IPersonState | undefined, action: Action) {
  return personReducer(state, action);
}
