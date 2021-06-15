import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { cloneDeep } from 'lodash';

import { user } from '../model/user';
import { remove, update } from '../useroperation/action/useroperation.action';
import { AppState } from '../useroperation/selector/useroperation.selector';

@Component({
  selector: 'app-itemview',
  templateUrl: './itemview.component.html',
  styleUrls: ['./itemview.component.css']
})
export class ItemviewComponent implements OnInit {

  @Input() user:user = new user();
  @Output() toDeleteUser: EventEmitter<user> = new EventEmitter();
  closeResult: string | undefined;
  updateUser:user = new user()
  modalServiceRef: NgbModalRef | undefined
  constructor(private modalService: NgbModal,private store:Store<AppState>) { }

  ngOnInit(): void {
  }
  onClick()
  {
    console.log("trying to remove")
    this.toDeleteUser.emit(this.user);
  }

  open(content:any) {
    this.updateUser = cloneDeep(this.user)
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
    this.store.dispatch(update({payload:this.updateUser}))
    this.modalServiceRef?.close()
  }
}
