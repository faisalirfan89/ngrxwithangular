import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteBookServer } from '../bookoperation/action/book.action';
import { BookState, selectAllBooks } from '../bookoperation/selectors/book.selectors';
import { book } from '../model/book';

@Component({
  selector: 'app-booklistview',
  templateUrl: './booklistview.component.html',
  styleUrls: ['./booklistview.component.css']
})
export class BooklistviewComponent implements OnInit {
  books$:Observable<book[]> | undefined;
  constructor(private store:Store<BookState>) { }

  ngOnInit(): void {
    this.books$ = this.store.select(selectAllBooks)
  }

  deleteBook(book:book)
  {
    console.log("Removing")
    this.store.dispatch(deleteBookServer({payload:book}))
  }

}
