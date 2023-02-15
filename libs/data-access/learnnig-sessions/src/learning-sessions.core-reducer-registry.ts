import { coreReducerRegistry } from '@battle-scribe-tools/utility/ngrx-utils';
import { LearningSessionsState } from './models/learning-sessions-state.model';

export const learningSessionsCoreReducerRegistry =
  coreReducerRegistry<LearningSessionsState>();
