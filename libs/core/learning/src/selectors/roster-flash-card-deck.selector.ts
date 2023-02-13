import { Deck } from '@battle-scribe-tools/data-access/flash-cards';
import { rostersSelector } from '@battle-scribe-tools/data-access/rosters';
import { createSelector } from '@ngrx/store';
import { FlashCardCreationSettings } from '../models/flash-card-creation-settings';

export const rosterFlashCardDeckSelector = (
  settings: FlashCardCreationSettings
) =>
  createSelector(rostersSelector, (rosters): Deck => {
    const roster = rosters[settings.rosterIndex];
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
              question: 'Rule?',
              rules: [
                uniqueRule ? rule.title : `${rule.title} (${unit.title})`,
              ],
              answers: [rule.description],
              box: 0,
            });
          });
        }

        if (settings.unitRules) {
          deck.cards.push({
            question: 'Einheiten Regeln',
            rules: [unit.title],
            answers: unit.rules.map((r) => r.title),
            box: 0,
          });
        }

        unit.models
          .map((model) => model.profiles)
          .flat()
          .forEach((profile) => {
            if (settings.unitProfiles.attacks) {
              deck.cards.push({
                question: `Atacken (A)`,
                rules: [profile.title],
                answers: [profile.attacks],
                box: 0,
              });
            }
            if (settings.unitProfiles.ballisticSkill) {
              deck.cards.push({
                question: `Ballistische Fähigkeit (BF)`,
                rules: [profile.title],
                answers: [profile.ballisticSkill],
                box: 0,
              });
            }
            if (settings.unitProfiles.leadership) {
              deck.cards.push({
                question: `Moralwert (MW)`,
                rules: [profile.title],
                answers: [profile.leadership],
                box: 0,
              });
            }
            if (settings.unitProfiles.movement) {
              deck.cards.push({
                question: `Bewegung (B)`,
                rules: [profile.title],
                answers: [profile.movement],
                box: 0,
              });
            }
            if (settings.unitProfiles.save) {
              deck.cards.push({
                question: `Rüstungswert (RW)`,
                rules: [profile.title],
                answers: [profile.save],
                box: 0,
              });
            }
            if (settings.unitProfiles.strength) {
              deck.cards.push({
                question: `Stärke (S)`,
                rules: [profile.title],
                answers: [profile.strength],
                box: 0,
              });
            }
            if (settings.unitProfiles.toughness) {
              deck.cards.push({
                question: `Wiederstand (W)`,
                rules: [profile.title],
                answers: [profile.toughness],
                box: 0,
              });
            }
            if (settings.unitProfiles.weaponSkill) {
              deck.cards.push({
                question: `Kampfgeschick (KG)`,
                rules: [profile.title],
                answers: [profile.weaponSkill],
                box: 0,
              });
            }
            if (settings.unitProfiles.wounds) {
              deck.cards.push({
                question: `Lebenspunkte (LP)`,
                rules: [profile.title],
                answers: [profile.wounds],
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
                question: `Fähigkeiten`,
                rules: [profile.title],
                answers: [profile.abilities],
                box: 0,
              });
            }
            if (settings.weaponProfiles.armourPenetration) {
              deck.cards.push({
                question: `Durchschlag (DS)`,
                rules: [profile.title],
                answers: [profile.armourPenetration],
                box: 0,
              });
            }
            if (settings.weaponProfiles.damage) {
              deck.cards.push({
                question: `Schdenswert (SW)`,
                rules: [profile.title],
                answers: [profile.damage],
                box: 0,
              });
            }
            if (settings.weaponProfiles.range) {
              deck.cards.push({
                question: `Reichweite`,
                rules: [profile.title],
                answers: [profile.range],
                box: 0,
              });
            }
            if (settings.weaponProfiles.strength) {
              deck.cards.push({
                question: `Stärke (S)`,
                rules: [profile.title],
                answers: [profile.strength],
                box: 0,
              });
            }
            if (settings.weaponProfiles.type) {
              deck.cards.push({
                question: `Typ`,
                rules: [profile.title],
                answers: [profile.type],
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
            (c) =>
              c.question === card.question &&
              c.answers.join() === card.answers.join()
          )
      ),
    };
  });
