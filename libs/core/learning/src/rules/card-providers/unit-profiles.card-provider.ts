import { Card } from '@battle-scribe-tools/data-access/flash-cards';
import { CardProvider } from '../../types/card-provider.type';

export const unitProfilesCardProvider: CardProvider = (roster, settings) =>
  roster.detachments
    .map((detachment) =>
      detachment.units
        .map((unit) =>
          unit.models
            .map((model) => model.profiles)
            .flat()
            .map((profile) => {
              const cards: Card[] = [];
              if (settings.unitProfiles.attacks) {
                cards.push({
                  question: `Attacks (A)`,
                  rules: [profile.title],
                  answers: [profile.attacks],
                  box: 0,
                });
              }
              if (settings.unitProfiles.ballisticSkill) {
                cards.push({
                  question: `Ballistic Skill (BS)`,
                  rules: [profile.title],
                  answers: [profile.ballisticSkill],
                  box: 0,
                });
              }
              if (settings.unitProfiles.leadership) {
                cards.push({
                  question: `Lead (Ld)`,
                  rules: [profile.title],
                  answers: [profile.leadership],
                  box: 0,
                });
              }
              if (settings.unitProfiles.movement) {
                cards.push({
                  question: `Movement (M)`,
                  rules: [profile.title],
                  answers: [profile.movement],
                  box: 0,
                });
              }
              if (settings.unitProfiles.save) {
                cards.push({
                  question: `Save (Sv)`,
                  rules: [profile.title],
                  answers: [profile.save],
                  box: 0,
                });
              }
              if (settings.unitProfiles.strength) {
                cards.push({
                  question: `Strength (S)`,
                  rules: [profile.title],
                  answers: [profile.strength],
                  box: 0,
                });
              }
              if (settings.unitProfiles.toughness) {
                cards.push({
                  question: `Toughness (T)`,
                  rules: [profile.title],
                  answers: [profile.toughness],
                  box: 0,
                });
              }
              if (settings.unitProfiles.weaponSkill) {
                cards.push({
                  question: `Weapon Skill (WS)`,
                  rules: [profile.title],
                  answers: [profile.weaponSkill],
                  box: 0,
                });
              }
              if (settings.unitProfiles.wounds) {
                cards.push({
                  question: `Wounds (W)`,
                  rules: [profile.title],
                  answers: [profile.wounds],
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
