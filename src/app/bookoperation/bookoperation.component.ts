import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { book } from '../model/book';
import { retrieveAllBooks, retrieveAllBooksAction, saveBookAction } from './action/book.action';
import { BookState } from './selectors/book.selectors';

@Component({
  selector: 'app-bookoperation',
  templateUrl: './bookoperation.component.html',
  styleUrls: ['./bookoperation.component.css']
})
export class BookoperationComponent implements OnInit {
  book:book 
  books$:Observable<book[]> | any;
  constructor(private store:Store<BookState>) { 
    this.book = new book
  }

  ngOnInit(): void {
    this.store.dispatch(retrieveAllBooksAction());
    // this.books$ = this.store.select(selectAllBooks)
  }

  onSubmit():void {
    this.store.dispatch(saveBookAction({payload:this.book}));
    this.clear()
  }
  clear():void{
    this.book = new book
  }
}
