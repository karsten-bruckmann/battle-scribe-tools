import {
  LearningSession,
  LearningSessionsState,
} from '@battle-scribe-tools/data-access/learnig-sessions';
import { createCoreReducer } from '@battle-scribe-tools/utility/ngrx-utils';
import { on } from '@ngrx/store';
import { cardKnown } from '../actions/card-known.action';
import { cardNotKnown } from '../actions/card-not-known.action';
import { cardSkipped } from '../actions/card-skipped.action';

export const learningSessionsReducer = createCoreReducer<LearningSessionsState>(
  on(cardKnown, cardNotKnown, cardSkipped, (state, action) => {
    let next = [...state];
    const session: LearningSession = {
      box: action.session.box,
      deckId: action.session.deckId,
      finishedCards: [
        ...action.session.finishedCards,
        action.session.currentCard.id,
      ],
    };
    next = next.filter((s) => s.deckId !== session.deckId);
    next.push(session);
    return next;
  })
);
