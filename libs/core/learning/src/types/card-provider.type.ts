import { Card } from '@battle-scribe-tools/data-access/flash-cards';
import { Roster } from '@battle-scribe-tools/data-access/rosters';
import { FlashCardCreationSettings } from '../models/flash-card-creation-settings';

export type CardProvider = (
  roster: Roster,
  settings: FlashCardCreationSettings
) => Card[];
