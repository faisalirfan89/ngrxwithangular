import { Component, OnInit } from '@angular/core';
import { user } from '../model/user';
import { cloneDeep } from "lodash";
import { createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectAllUsers } from './selector/useroperation.selector';
import { add, addUsers } from './action/useroperation.action';

@Component({
  selector: 'app-useroperation',
  templateUrl: './useroperation.component.html',
  styleUrls: ['./useroperation.component.css']
})
export class UseroperationComponent implements OnInit {

  user:user
  users$:Observable<user[]>;
  constructor(private store:Store<AppState>) { 
    this.user = new user
    let initialData =  [
      {
          name : "Huda",
          address : "GKP",
          email : "huda@gmail.com",
          id:"1"
      },
      {
          name : "faisal",
          address : "GKP",
          email : "faisal@gmail.com",
          id:"2"
      },
      {
          name : "Nikhat",
          address : "GKP",
          email : "Nikhat@gmail.com",
          id:"3"
      }
     
  ]
    this.store.dispatch(addUsers({payload:initialData}))
    this.users$ = store.select(selectAllUsers)
  }

  ngOnInit(): void {
  }

  onSubmit():void {
  if(this.isValidModel(this.user))
  {
    console.log("Adding")
   this.user.id =  Math.floor(Math.random() * 1000).toString();
   this.store.dispatch(add({payload:cloneDeep(this.user)}))
   this.clear();
  }
}
clear():void{
  this.user = new user
}
isValidModel(user:user):boolean
{
  if(user.name === "" || user.email ==="" || user.address==="")
  {
    return false
  }
  else{
    return true
  }
}
}
