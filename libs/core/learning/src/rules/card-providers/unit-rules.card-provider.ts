import { CardProvider } from '../../types/card-provider.type';

export const unitRulesCardProvider: CardProvider = (roster, settings) => {
  if (!settings.unitRules) {
    return [];
  }

  return roster.detachments
    .map((detachment) =>
      detachment.units
        .map((unit) => ({
          question: "Unit's Rules",
          rules: [unit.title],
          answers: unit.rules.map((r) => r.title),
          box: 0,
        }))
        .flat()
    )
    .flat();
};
