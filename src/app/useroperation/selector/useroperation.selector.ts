import { state } from '@angular/animations';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { user } from 'src/app/model/user';
import { adapter,State,reducer } from '../reducer/useroperation.reducer';
 
export interface AppState {
    users: State;
  }
  

  export const reducers: ActionReducerMap<AppState> = {
    users:reducer,
  };

  export const selectUserState = createFeatureSelector<State>('users');

   // get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const getSelectedUserId = (state: State) => state.selectedUserId;

export const selectUserIds = createSelector(
  selectUserState,
  selectIds // shorthand for usersState => fromUser.selectUserIds(usersState)
);
export const selectUserEntities = createSelector(
  selectUserState,
  selectEntities
);
export const selectAllUsers = createSelector(
  selectUserState,
  selectAll
);
export const selectUserTotal = createSelector(
  selectUserState,
  selectTotal
);
export const selectCurrentUserId = createSelector(
  selectUserState,
  getSelectedUserId
);
 
export const selectCurrentUser = createSelector(
  selectUserEntities,
  selectCurrentUserId,
  (userEntities, userId) => userEntities[userId]
);


;