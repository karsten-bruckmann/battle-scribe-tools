import {
  deckAddedAction,
  deckDeletedAction,
  flashCardsReducer as dataReducer,
  FlashCardsState,
} from '@battle-scribe-tools/data-access/flash-cards';
import { createCoreReducer } from '@battle-scribe-tools/utility/ngrx-utils';
import { on } from '@ngrx/store';
import { deckDeletionRequested } from '../actions/deck-deletion-requested.action';
import { deckCreated } from '../actions/internal/deck-created.action';

export const flashCardsReducer = createCoreReducer<FlashCardsState>(
  on(deckCreated, (state, action) =>
    dataReducer(state, deckAddedAction({ deck: action.deck }))
  ),
  on(deckDeletionRequested, (state, action) =>
    dataReducer(state, deckDeletedAction({ index: action.index }))
  )
);
