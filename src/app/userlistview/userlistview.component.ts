import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { user } from '../model/user';
import { remove } from '../useroperation/action/useroperation.action';
import { AppState, selectAllUser } from '../useroperation/selector/useroperation.selector';

@Component({
  selector: 'app-userlistview',
  templateUrl: './userlistview.component.html',
  styleUrls: ['./userlistview.component.css']
})
export class UserlistviewComponent implements OnInit {
  users$:Observable<user[]>;
  constructor(private store:Store<AppState>) { 
    debugger;
    this.users$ = store.select(selectAllUser)
    console.log(this.users$)
    debugger;
  }

  ngOnInit(): void {
  }
  deleteUser(user:user)
  {
    console.log("Removing")
    this.store.dispatch(remove({payload:user}))
  }
}
