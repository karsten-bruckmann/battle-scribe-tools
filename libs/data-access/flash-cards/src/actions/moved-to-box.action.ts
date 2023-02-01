import { createAction, props } from '@ngrx/store';

export const movedToBoxAction = createAction(
  'flash-cards/moved-to-box',
  props<{ deckIndex: number; cardIndex: number; box: number }>()
);