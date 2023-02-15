import { createAction, props } from '@ngrx/store';

export const movedToBoxAction = createAction(
  'data-access/flash-cards/moved-to-box',
  props<{ deckId: string; cardId: string; box: number }>()
);
