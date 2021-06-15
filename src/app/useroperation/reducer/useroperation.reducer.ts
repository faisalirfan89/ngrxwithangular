import { Action, createReducer, on } from '@ngrx/store';
import { user } from 'src/app/model/user';
import * as userAction from 'src/app/useroperation/action/useroperation.action'
import { AppState } from '../selector/useroperation.selector';




export const initialState: user[] = [
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


export const userReducer = createReducer(
    initialState,
    on(userAction.add, (state,{payload}) =>{
        return [...state, payload]
    }
  ),
  on(userAction.remove, (state, { payload }) => state.filter((user) => user.id !== payload.id)),
  on(userAction.update, (state,{payload}) =>{
    return state.map(x=>
        {
            if(x.id === payload.id)
            {
                return payload
            }
            else
            {
                return x
            }
        })
}
),
  );
