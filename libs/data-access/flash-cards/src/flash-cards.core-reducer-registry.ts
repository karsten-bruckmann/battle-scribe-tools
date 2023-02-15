import { coreReducerRegistry } from '@battle-scribe-tools/utility/ngrx-utils';
import { FlashCardsState } from './models/flash-cards-state.model';

export const flashCardsCoreReducerRegistry =
  coreReducerRegistry<FlashCardsState>();
