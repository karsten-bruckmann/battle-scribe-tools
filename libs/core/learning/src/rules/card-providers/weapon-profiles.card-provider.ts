import { Card } from '@battle-scribe-tools/data-access/flash-cards';
import { CardProvider } from '../../types/card-provider.type';

export const weaponProfilesCardProvider: CardProvider = (roster, settings) =>
  roster.detachments
    .map((detachment) =>
      detachment.units
        .map((unit) =>
          unit.models
            .map((model) => model.weapons)
            .flat()
            .map((weapon) => weapon.profiles)
            .flat()
            .map((profile) => {
              const cards: Card[] = [];

              if (settings.weaponProfiles.abilities) {
                cards.push({
                  question: `Weapon abilities`,
                  rules: [profile.title],
                  answers: [profile.abilities],
                  box: 0,
                });
              }
              if (settings.weaponProfiles.armourPenetration) {
                cards.push({
                  question: `Armor Penetration (AP)`,
                  rules: [profile.title],
                  answers: [profile.armourPenetration],
                  box: 0,
                });
              }
              if (settings.weaponProfiles.damage) {
                cards.push({
                  question: `Damage (D)`,
                  rules: [profile.title],
                  answers: [profile.damage],
                  box: 0,
                });
              }
              if (settings.weaponProfiles.range) {
                cards.push({
                  question: `Range`,
                  rules: [profile.title],
                  answers: [profile.range],
                  box: 0,
                });
              }
              if (settings.weaponProfiles.strength) {
                cards.push({
                  question: `Strength (S)`,
                  rules: [profile.title],
                  answers: [profile.strength],
                  box: 0,
                });
              }
              if (settings.weaponProfiles.type) {
                cards.push({
                  question: `Type`,
                  rules: [profile.title],
                  answers: [profile.type],
                  box: 0,
                });
              }

              return cards;
            })
            .flat()
        )
        .flat()
    )
    .flat();
