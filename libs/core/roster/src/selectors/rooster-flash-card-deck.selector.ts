import { Deck } from '@battle-scribe-tools/data-access/flash-cards';
import { selectedRosterSelector } from '@battle-scribe-tools/data-access/rosters';
import { createSelector } from '@ngrx/store';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Language } from 'libs/data-access/translations/src/language';

export const roosterFlashCardDeckSelector = (
  language: Language,
  translate: (original: string, language: Language) => string
) =>
  createSelector(selectedRosterSelector, (roster): Deck => {
    const deck: Deck = {
      name: roster?.title || 'New Deck',
      cards: [],
      boxes: 3,
    };

    roster?.detachments.forEach((detachment) => {
      detachment.units.forEach((unit) => {
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

        unit.models
          .map((model) => model.profiles)
          .flat()
          .forEach((profile) => {
            deck.cards.push({
              question: `${translate(profile.title, language)}: Atacken (A)`,
              answer: translate(profile.attacks, language),
              box: 0,
            });
            deck.cards.push({
              question: `${translate(
                profile.title,
                language
              )}: Ballistische Fähigkeit (BF)`,
              answer: translate(profile.ballisticSkill, language),
              box: 0,
            });
            deck.cards.push({
              question: `${translate(profile.title, language)}: Moralwert (MW)`,
              answer: translate(profile.leadership, language),
              box: 0,
            });
            deck.cards.push({
              question: `${translate(profile.title, language)}: Bewegung (B)`,
              answer: translate(profile.movement, language),
              box: 0,
            });
            deck.cards.push({
              question: `${translate(
                profile.title,
                language
              )}: Rüstungswert (RW)`,
              answer: translate(profile.save, language),
              box: 0,
            });
            deck.cards.push({
              question: `${translate(profile.title, language)}: Stärke (S)`,
              answer: translate(profile.strength, language),
              box: 0,
            });
            deck.cards.push({
              question: `${translate(
                profile.title,
                language
              )}: Wiederstand (W)`,
              answer: translate(profile.toughness, language),
              box: 0,
            });
            deck.cards.push({
              question: `${translate(
                profile.title,
                language
              )}: Kampfgeschick (KG)`,
              answer: translate(profile.weaponSkill, language),
              box: 0,
            });
            deck.cards.push({
              question: `${translate(
                profile.title,
                language
              )}: Lebenspunkte (LP)`,
              answer: translate(profile.wounds, language),
              box: 0,
            });
          });

        unit.models
          .map((model) => model.weapons)
          .flat()
          .map((weapon) => weapon.profiles)
          .flat()
          .forEach((profile) => {
            deck.cards.push({
              question: `${translate(profile.title, language)}: Fähigkeiten`,
              answer: translate(profile.abilities, language),
              box: 0,
            });
            deck.cards.push({
              question: `${translate(
                profile.title,
                language
              )}: Durchschlag (DS)`,
              answer: translate(profile.armourPenetration, language),
              box: 0,
            });
            deck.cards.push({
              question: `${translate(
                profile.title,
                language
              )}: Schdenswert (SW)`,
              answer: translate(profile.damage, language),
              box: 0,
            });
            deck.cards.push({
              question: `${translate(profile.title, language)}: Reichweite`,
              answer: translate(profile.range, language),
              box: 0,
            });
            deck.cards.push({
              question: `${translate(profile.title, language)}: Stärke (S)`,
              answer: translate(profile.strength, language),
              box: 0,
            });
            deck.cards.push({
              question: `${translate(profile.title, language)}: Typ`,
              answer: translate(profile.type, language),
              box: 0,
            });
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
