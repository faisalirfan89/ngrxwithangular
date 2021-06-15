import { Action, createReducer, on } from '@ngrx/store';
import { user } from 'src/app/model/user';
import * as userAction from 'src/app/useroperation/action/useroperation.action'
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { entries, initial, update } from 'lodash';

export interface State extends EntityState<user> {
    // additional entity state properties
    selectedUserId: string | "";
  }


 

export function selectUserId(a: user): string {
    //In this case this would be optional since primary key is id
    return a.id;
  }

  export const adapter: EntityAdapter<user> = createEntityAdapter<user>({
    selectId: selectUserId,
  });

  export const initialState: State = adapter.getInitialState({
    // additional entity state properties
    selectedUserId: ""

  });

  export function reducer(state: State | undefined, action: Action) {
    return userReducer(state, action);
  }
 

export const userReducer = createReducer(
    initialState,
    on(userAction.add, (state,{payload}) =>{
        return adapter.addOne(payload, state)
    }
  ),
  on(userAction.remove, (state, { payload }) => {return adapter.removeOne(payload.id, state);}),
  on(userAction.addUsers, (state, { payload }) => {
    return adapter.addMany(payload, state);
  }),
  on(userAction.update, (state,{payload}) =>{
    return adapter.setOne(payload, state);
}
),
  );
