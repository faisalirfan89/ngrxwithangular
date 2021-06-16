import { createAction, props } from '@ngrx/store';
import { book } from 'src/app/model/book';



export const addBook = "[Book Operation] Add"
export const removeBook = "[Book Operation] Remove"
export const updateBook = "[Book Operation] Update"
export const addBooks = "[Book Operation] Add All Book"
export const retrieveAllBooks = "[Book Operation] Fetch All Books from Server"
export const saveBook = "[Book Operation] Save Book to Server"
export const removeBookServer = "[Book Operation] Remove Book from Server"
export const modifyBookServer = "[Book Operation] Update Book from Server"

export const addBookAction = createAction(
    addBook,
    props<{ payload:book}>()
  );

  export const removeBookAction = createAction(
    removeBook,
    props<{ payload:book }>()
  );

  export const updateBookAction = createAction(updateBook, props<{ payload: book }>());

  export const addBooksAction = createAction(addBooks, props<{ payload: book[] }>());

  export const retrieveAllBooksAction = createAction(retrieveAllBooks);

  export const saveBookAction = createAction(saveBook,props<{ payload: book }>());
  export const deleteBookServer = createAction(removeBookServer,props<{ payload: book }>());
  export const updateBookServer = createAction(modifyBookServer,props<{ payload: book }>());