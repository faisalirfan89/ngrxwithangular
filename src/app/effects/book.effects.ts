import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { BooksService } from 'src/app/services/bookservice';
import { retrieveAllBooksAction, addBooksAction, saveBookAction, addBookAction, deleteBookServer,removeBookAction, updateBookServer, updateBookAction} from '../bookoperation/action/book.action';

@Injectable()
export class BookEffects {
 
  loadbooks$ = createEffect(() => this.actions$.pipe(
    ofType(retrieveAllBooksAction),
    mergeMap(() => this.booksService.getAll()
      .pipe(
        map(books => addBooksAction({payload:books})),
        catchError(() => EMPTY)
      ))
    )
  );
  savebooks$ = createEffect(() => this.actions$.pipe(
    ofType(saveBookAction),
    mergeMap((action) => this.booksService.post(action.payload)
      .pipe(
        map(book => addBookAction({payload:book})),
        catchError(() => EMPTY)
      ))
    )
  );
  deletebook$ = createEffect(()=>this.actions$.pipe(
    ofType(deleteBookServer),
    mergeMap(
     (action) => this.booksService.delete(action.payload.id).pipe(
        map(()=> {
            return removeBookAction({payload:action.payload})
        }),
        catchError(() => EMPTY) 
     )   
    )
  ));
  
  updatebook$ = createEffect(()=>this.actions$.pipe(
    ofType(updateBookServer),
    mergeMap(
        (action) =>this.booksService.put(action.payload).pipe(
        map(()=>{
            debugger;
            return updateBookAction({payload:action.payload})
        }),
        catchError(() => EMPTY)
    ))
  ));
  constructor(
    private actions$: Actions,
    private booksService: BooksService
  ) {}
}