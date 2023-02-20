import { Deck } from '@battle-scribe-tools/data-access/flash-cards';
import { rostersSelector } from '@battle-scribe-tools/data-access/rosters';
import { idAwareArrayToRecord } from '@battle-scribe-tools/utility/ngrx-utils';
import { createSelector } from '@ngrx/store';
import { v4 as uuid } from 'uuid';
import { FlashCardCreationSettings } from '../models/flash-card-creation-settings';
import { psychicPowersCardProvider } from '../rules/card-providers/psychic-powers.card-provider';
import { rulesCardProvider } from '../rules/card-providers/rules.card-provider';
import { unitProfilesCardProvider } from '../rules/card-providers/unit-profiles.card-provider';
import { unitPsychicPowersCardProvider } from '../rules/card-providers/unit-psychic-powers.card-provider';
import { unitRulesCardProvider } from '../rules/card-providers/unit-rules.card-provider';
import { deDuplicateCardsRule } from '../rules/de-duplicate-cards.rule';

export const rosterFlashCardDeckSelector = (
  settings: FlashCardCreationSettings
) =>
  createSelector(rostersSelector, (rosters): Deck => {
    const roster = rosters[settings.rosterId];
    return {
      reference: settings.rosterId,
      cards: idAwareArrayToRecord(
        deDuplicateCardsRule(
          [
            rulesCardProvider,
            unitRulesCardProvider,
            psychicPowersCardProvider,
            unitPsychicPowersCardProvider,
            unitProfilesCardProvider,
          ]
            .map((provider) => provider(roster, settings))
            .flat()
        ).map((card) => ({ ...card, id: uuid() }))
      ),
      boxes: settings.boxes,
    };
  });
