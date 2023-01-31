import { Deck } from '@battle-scribe-tools/data-access/flash-cards';
import { rostersSelector } from '@battle-scribe-tools/data-access/rosters';
import { createSelector } from '@ngrx/store';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { FlashCardCreationSettings } from '@battle-scribe-tools/core/roster';
import { Language } from '@battle-scribe-tools/data-access/translations';

export const rosterFlashCardDeckSelector = (
  rosterIndex: number,
  settings: FlashCardCreationSettings,
  language: Language,
  translate: (original: string, language: Language) => string
) =>
  createSelector(rostersSelector, (rosters): Deck => {
    const roster = rosters[rosterIndex];
    const deck: Deck = {
      name: settings.name,
      cards: [],
      boxes: settings.boxes,
    };

    roster?.detachments.forEach((detachment) => {
      detachment.units.forEach((unit) => {
        if (settings.rules) {
          unit.rules.forEach((rule) => {
            const uniqueRule =
              detachment.units
                .map((u) => u.rules)
                .flat()
                .find(
                  (r) =>
                    r.title === rule.title && r.description !== rule.description
                ) === undefined;
            deck.cards.push({
              question: `${translate(rule.title, language)}${
                uniqueRule ? '' : ` (${translate(unit.title, language)})`
              }?`,
              answer: translate(rule.description, language),
              box: 0,
            });
          });
        }

        unit.models
          .map((model) => model.profiles)
          .flat()
          .forEach((profile) => {
            if (settings.unitProfiles.attacks) {
              deck.cards.push({
                question: `${translate(profile.title, language)}: Atacken (A)`,
                answer: translate(profile.attacks, language),
                box: 0,
              });
            }
            if (settings.unitProfiles.ballisticSkill) {
              deck.cards.push({
                question: `${translate(
                  profile.title,
                  language
                )}: Ballistische Fähigkeit (BF)`,
                answer: translate(profile.ballisticSkill, language),
                box: 0,
              });
            }
            if (settings.unitProfiles.leadership) {
              deck.cards.push({
                question: `${translate(
                  profile.title,
                  language
                )}: Moralwert (MW)`,
                answer: translate(profile.leadership, language),
                box: 0,
              });
            }
            if (settings.unitProfiles.movement) {
              deck.cards.push({
                question: `${translate(profile.title, language)}: Bewegung (B)`,
                answer: translate(profile.movement, language),
                box: 0,
              });
            }
            if (settings.unitProfiles.save) {
              deck.cards.push({
                question: `${translate(
                  profile.title,
                  language
                )}: Rüstungswert (RW)`,
                answer: translate(profile.save, language),
                box: 0,
              });
            }
            if (settings.unitProfiles.strength) {
              deck.cards.push({
                question: `${translate(profile.title, language)}: Stärke (S)`,
                answer: translate(profile.strength, language),
                box: 0,
              });
            }
            if (settings.unitProfiles.toughness) {
              deck.cards.push({
                question: `${translate(
                  profile.title,
                  language
                )}: Wiederstand (W)`,
                answer: translate(profile.toughness, language),
                box: 0,
              });
            }
            if (settings.unitProfiles.weaponSkill) {
              deck.cards.push({
                question: `${translate(
                  profile.title,
                  language
                )}: Kampfgeschick (KG)`,
                answer: translate(profile.weaponSkill, language),
                box: 0,
              });
            }
            if (settings.unitProfiles.wounds) {
              deck.cards.push({
                question: `${translate(
                  profile.title,
                  language
                )}: Lebenspunkte (LP)`,
                answer: translate(profile.wounds, language),
                box: 0,
              });
            }
          });

        unit.models
          .map((model) => model.weapons)
          .flat()
          .map((weapon) => weapon.profiles)
          .flat()
          .forEach((profile) => {
            if (settings.weaponProfiles.abilities) {
              deck.cards.push({
                question: `${translate(profile.title, language)}: Fähigkeiten`,
                answer: translate(profile.abilities, language),
                box: 0,
              });
            }
            if (settings.weaponProfiles.armourPenetration) {
              deck.cards.push({
                question: `${translate(
                  profile.title,
                  language
                )}: Durchschlag (DS)`,
                answer: translate(profile.armourPenetration, language),
                box: 0,
              });
            }
            if (settings.weaponProfiles.damage) {
              deck.cards.push({
                question: `${translate(
                  profile.title,
                  language
                )}: Schdenswert (SW)`,
                answer: translate(profile.damage, language),
                box: 0,
              });
            }
            if (settings.weaponProfiles.range) {
              deck.cards.push({
                question: `${translate(profile.title, language)}: Reichweite`,
                answer: translate(profile.range, language),
                box: 0,
              });
            }
            if (settings.weaponProfiles.strength) {
              deck.cards.push({
                question: `${translate(profile.title, language)}: Stärke (S)`,
                answer: translate(profile.strength, language),
                box: 0,
              });
            }
            if (settings.weaponProfiles.type) {
              deck.cards.push({
                question: `${translate(profile.title, language)}: Typ`,
                answer: translate(profile.type, language),
                box: 0,
              });
            }
          });
      });
    });

    return {
      ...deck,
      cards: deck.cards.filter(
        (card, index) =>
          index ===
          deck.cards.findIndex(
            (c) => c.question === card.question && c.answer === card.answer
          )
      ),
    };
  });
