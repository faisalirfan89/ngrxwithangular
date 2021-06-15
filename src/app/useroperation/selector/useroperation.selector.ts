import { state } from '@angular/animations';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { user } from 'src/app/model/user';
 
export interface AppState {
    users: user[];
  }
  
  export const selectAllUser = createSelector(
    (state: AppState) => state.users,
    (users: Array<user>) => users
  );
 