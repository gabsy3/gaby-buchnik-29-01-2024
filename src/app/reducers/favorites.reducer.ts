import { createReducer, on } from '@ngrx/store';
import { Add, Remove } from '../actions/favorites.actions';

export const initialState = [{
    id:"",
    name:"",
    currentWeather:""
}];

export const counterReducer = createReducer(
  initialState,
  on(Add, (state) => state),
  on(Remove, (state) => state),
);