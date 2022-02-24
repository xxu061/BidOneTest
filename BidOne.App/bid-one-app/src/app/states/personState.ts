import { ActionReducerMap } from '@ngrx/store';
import { reducer } from '../reducers/personReducer';

export interface AppState {
    personState: IPersonState;
}

export interface IPersonState{
    firstName: string;
    lastName: string;
    error: string;
    submitted: boolean;
    success: string;
}

export const reducers: ActionReducerMap<AppState> = {
    personState: reducer
};

export const initialPersonState: IPersonState = {
    firstName: '',
    lastName: '',
    error: '',
    success: '',
    submitted: false
};

