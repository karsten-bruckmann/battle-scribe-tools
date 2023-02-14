import { CardProvider } from '../../types/card-provider.type';

export const unitPsychicPowersCardProvider: CardProvider = (
  roster,
  settings
) => {
  if (!settings.unitPsychicPowers) {
    return [];
  }

  return roster.detachments
    .map((detachment) =>
      detachment.units
        .filter(
          (unit) =>
            unit.models.map((model) => model.psychicPowers).flat().length > 0
        )
        .map((unit) =>
          unit.models.map((model) => ({
            question: "Unit's Psychic Powers",
            rules: [unit.title],
            answers: model.psychicPowers.map((p) => p.title),
            box: 0,
          }))
        )
        .flat()
    )
    .flat();
};
