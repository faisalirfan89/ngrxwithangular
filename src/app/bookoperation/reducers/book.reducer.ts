import { Action, createReducer, on } from '@ngrx/store';
import * as bookAction from 'src/app/bookoperation/action/book.action'
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { book } from 'src/app/model/book';

export interface State extends EntityState<book> {
    // additional entity state properties
    selectedBookId: string | "";
  }


 

export function selectBookId(a: book): number {
    //In this case this would be optional since primary key is id
    return a.id;
  }

  export const adapter: EntityAdapter<book> = createEntityAdapter<book>({
    selectId: selectBookId,
  });

  export const initialState: State = adapter.getInitialState({
    // additional entity state properties
    selectedBookId: ""

  });

  export function reducer(state: State | undefined, action: Action) {
    return bookReducer(state, action);
  }
 

export const bookReducer = createReducer(
    initialState,
    on(bookAction.addBookAction, (state,{payload}) =>{
        return adapter.addOne(payload, state)
    }
  ),
  on(bookAction.removeBookAction, (state, { payload }) => {return adapter.removeOne(payload.id, state);}),
  on(bookAction.addBooksAction, (state, { payload }) => {
    return adapter.addMany(payload, state);
  }),
  on(bookAction.updateBookAction, (state,{payload}) =>{
    return adapter.setOne(payload, state);
}
),
  );
