import { coreReducerRegistry } from '@battle-scribe-tools/utility/ngrx-utils';
import { RostersState } from './models/rosters-state.model';

export const rostersCoreReducerRegistry = coreReducerRegistry<RostersState>();
