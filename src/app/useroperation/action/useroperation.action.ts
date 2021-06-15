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

  export const update = createAction(
    '[User Operation] update',
    props<{ payload:user }>()
  );