import { createReducer, on, Action } from '@ngrx/store';
import { IPersonState} from '../states/personState';
import { SAVEPERSON, SAVEPERSON_FAIL, SAVEPERSON_SUCCESS, UPDATEFIRSTNAME, UPDATELASTNAME } from '../actions/PersonActions';
import { state } from '@angular/animations';

export const initialState: IPersonState = {firstName: '', lastName: '', error: '', success: '', submitted: false};

const personReducer = createReducer(initialState,
    on(SAVEPERSON_SUCCESS, (state) => ({...state, firstName: '', lastName: '', submitted: false, error: '', success: 'Successfully submitted request'})),
    on(SAVEPERSON_FAIL, (state) => ({...state, error: 'Error occurred while submitting you request'})),
    on(SAVEPERSON, (state) => ({...state, submitted: true, error: ''})),
    on(UPDATEFIRSTNAME, (state, payload) => ({...state, firstName: payload.firstName})),
    on(UPDATELASTNAME, (state, payload) => ({...state, lastName: payload.lastName}))
);

export function reducer(state: IPersonState | undefined, action: Action) {
  return personReducer(state, action);
}
