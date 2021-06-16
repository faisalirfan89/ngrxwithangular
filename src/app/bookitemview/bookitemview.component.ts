import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { updateBookServer } from '../bookoperation/action/book.action';
import { book } from '../model/book';
import { AppState } from '../useroperation/selector/useroperation.selector';

@Component({
  selector: 'app-bookitemview',
  templateUrl: './bookitemview.component.html',
  styleUrls: ['./bookitemview.component.css']
})
export class BookitemviewComponent implements OnInit {

  @Input() book:book = new book();
  @Output() toDeleteBook: EventEmitter<book> = new EventEmitter();
  closeResult: string | undefined;
  updateBook:book = new book()
  modalServiceRef: NgbModalRef | undefined
  constructor(private modalService: NgbModal,private store:Store<AppState>) { }

  ngOnInit(): void {
  }
  onClick()
  {
    console.log("trying to remove")
    this.toDeleteBook.emit(this.book);
  }
  open(content:any) {
    this.updateBook = cloneDeep(this.book)
    this.modalServiceRef = this.modalService.open(content);
    this.modalServiceRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  update(mymodel:any):void{
    console.log("updating")
    this.store.dispatch(updateBookServer({payload:this.updateBook}))
    this.modalServiceRef?.close()
  }

}
