import { CardProvider } from '../../types/card-provider.type';

export const psychicPowersCardProvider: CardProvider = (roster, settings) => {
  if (!settings.psychicPowers) {
    return [];
  }

  return roster.detachments
    .map((detachment) =>
      detachment.units
        .map((unit) =>
          unit.models
            .map((model) =>
              model.psychicPowers.map((power) => ({
                question: 'Psychic Power',
                rules: [power.title],
                answers: power.profiles.map((profile) => profile.description),
                box: 0,
              }))
            )
            .flat()
        )
        .flat()
    )
    .flat();
};
