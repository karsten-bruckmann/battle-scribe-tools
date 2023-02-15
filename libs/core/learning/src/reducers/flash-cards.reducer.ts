import {
  deckAddedAction,
  deckDeletedAction,
  flashCardsReducer as dataReducer,
  FlashCardsState,
  movedToBoxAction,
} from '@battle-scribe-tools/data-access/flash-cards';
import { createCoreReducer } from '@battle-scribe-tools/utility/ngrx-utils';
import { on } from '@ngrx/store';
import { cardKnown } from '../actions/card-known.action';
import { cardNotKnown } from '../actions/card-not-known.action';
import { deckDeletionRequested } from '../actions/deck-deletion-requested.action';
import { deckCreated } from '../actions/internal/deck-created.action';

export const flashCardsReducer = createCoreReducer<FlashCardsState>(
  on(deckCreated, (state, action) =>
    dataReducer(state, deckAddedAction({ deck: action.deck }))
  ),
  on(deckDeletionRequested, (state, action) =>
    dataReducer(state, deckDeletedAction({ id: action.id }))
  ),
  on(cardKnown, (state, action) =>
    dataReducer(
      state,
      movedToBoxAction({
        deckId: action.session.deckId,
        cardId: action.session.currentCard.id,
        box: action.session.box + 1,
      })
    )
  ),
  on(cardNotKnown, (state, action) =>
    dataReducer(
      state,
      movedToBoxAction({
        deckId: action.session.deckId,
        cardId: action.session.currentCard.id,
        box: action.session.box > 0 ? action.session.box - 1 : 0,
      })
    )
  )
);
