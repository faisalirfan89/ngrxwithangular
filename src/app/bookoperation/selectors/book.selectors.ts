import { state } from '@angular/animations';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { user } from 'src/app/model/user';
import { adapter,State,reducer } from '../reducers/book.reducer';
 
export interface BookState {
    books: State;
  }
  

  export const reducers: ActionReducerMap<BookState> = {
    books:reducer,
  };

  export const selectBookState = createFeatureSelector<State>('books');

   // get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const getSelectedBookId = (state: State) => state.selectedBookId;

export const selectBookIds = createSelector(
  selectBookState,
  selectIds // shorthand for usersState => fromUser.selectUserIds(usersState)
);
export const selectBookEntities = createSelector(
    selectBookState,
    selectEntities
);
export const selectAllBooks = createSelector(
    selectBookState,
    selectAll
);
export const selectBookTotal = createSelector(
    selectBookState,
    selectTotal
);
export const selectCurrentBookId = createSelector(
    selectBookState,
    getSelectedBookId
);
 
export const selectCurrentBook = createSelector(
  selectBookEntities,
  selectCurrentBookId,
  (userEntities, bookId) => userEntities[bookId]
);