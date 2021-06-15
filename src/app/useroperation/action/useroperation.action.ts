import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { user } from 'src/app/model/user';

export const add = createAction(
    '[User Operation] Add',
    props<{ payload:user}>()
  );

  export const remove = createAction(
    '[User Operation] Remove',
    props<{ payload:user }>()
  );

  export const update = createAction('[User/API] Set User', props<{ payload: user }>());

  export const addUsers = createAction('[User/API] Add Users', props<{ payload: user[] }>());