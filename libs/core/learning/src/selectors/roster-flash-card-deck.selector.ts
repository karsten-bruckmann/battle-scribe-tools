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
              question: 'Rule',
              rules: [
                uniqueRule ? rule.title : `${rule.title} (${unit.title})`,
              ],
              answers: [rule.description],
              box: 0,
            });
          });
        }

        const allPsychicPowers = unit.models
          .map((model) => model.psychicPowers)
          .flat();
        const uniquePsychicPowers = allPsychicPowers.filter(
          (v, i) => allPsychicPowers.findIndex((vv) => v === vv) === i
        );

        if (settings.psychicPowers) {
          uniquePsychicPowers.forEach((power) => {
            deck.cards.push({
              question: 'Psychic Power',
              rules: [power.title],
              answers: power.profiles.map((profile) => profile.description),
              box: 0,
            });
          });
        }

        if (settings.unitRules) {
          deck.cards.push({
            question: "Unit's Rules",
            rules: [unit.title],
            answers: unit.rules.map((r) => r.title),
            box: 0,
          });
        }

        if (settings.unitPsychicPowers && uniquePsychicPowers.length > 0) {
          deck.cards.push({
            question: "Unit's Psychic Powers",
            rules: [unit.title],
            answers: uniquePsychicPowers.map((p) => p.title),
            box: 0,
          });
        }

        unit.models
          .map((model) => model.profiles)
          .flat()
          .forEach((profile) => {
            if (settings.unitProfiles.attacks) {
              deck.cards.push({
                question: `Attacks (A)`,
                rules: [profile.title],
                answers: [profile.attacks],
                box: 0,
              });
            }
            if (settings.unitProfiles.ballisticSkill) {
              deck.cards.push({
                question: `Ballistic Skill (BS)`,
                rules: [profile.title],
                answers: [profile.ballisticSkill],
                box: 0,
              });
            }
            if (settings.unitProfiles.leadership) {
              deck.cards.push({
                question: `Lead (Ld)`,
                rules: [profile.title],
                answers: [profile.leadership],
                box: 0,
              });
            }
            if (settings.unitProfiles.movement) {
              deck.cards.push({
                question: `Movement (M)`,
                rules: [profile.title],
                answers: [profile.movement],
                box: 0,
              });
            }
            if (settings.unitProfiles.save) {
              deck.cards.push({
                question: `Save (Sv)`,
                rules: [profile.title],
                answers: [profile.save],
                box: 0,
              });
            }
            if (settings.unitProfiles.strength) {
              deck.cards.push({
                question: `Strength (S)`,
                rules: [profile.title],
                answers: [profile.strength],
                box: 0,
              });
            }
            if (settings.unitProfiles.toughness) {
              deck.cards.push({
                question: `Toughness (T)`,
                rules: [profile.title],
                answers: [profile.toughness],
                box: 0,
              });
            }
            if (settings.unitProfiles.weaponSkill) {
              deck.cards.push({
                question: `Weapon Skill (WS)`,
                rules: [profile.title],
                answers: [profile.weaponSkill],
                box: 0,
              });
            }
            if (settings.unitProfiles.wounds) {
              deck.cards.push({
                question: `Wounds (W)`,
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
                question: `Weapon abilities`,
                rules: [profile.title],
                answers: [profile.abilities],
                box: 0,
              });
            }
            if (settings.weaponProfiles.armourPenetration) {
              deck.cards.push({
                question: `Armor Penetration (AP)`,
                rules: [profile.title],
                answers: [profile.armourPenetration],
                box: 0,
              });
            }
            if (settings.weaponProfiles.damage) {
              deck.cards.push({
                question: `Damage (D)`,
                rules: [profile.title],
                answers: [profile.damage],
                box: 0,
              });
            }
            if (settings.weaponProfiles.range) {
              deck.cards.push({
                question: `Range`,
                rules: [profile.title],
                answers: [profile.range],
                box: 0,
              });
            }
            if (settings.weaponProfiles.strength) {
              deck.cards.push({
                question: `Strength (S)`,
                rules: [profile.title],
                answers: [profile.strength],
                box: 0,
              });
            }
            if (settings.weaponProfiles.type) {
              deck.cards.push({
                question: `Type`,
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
