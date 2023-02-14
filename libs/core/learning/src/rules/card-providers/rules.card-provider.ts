import { CardProvider } from '../../types/card-provider.type';

export const rulesCardProvider: CardProvider = (roster, settings) => {
  if (!settings.rules) {
    return [];
  }

  return roster.detachments
    .map((detachment) =>
      detachment.units
        .map((unit) =>
          unit.rules
            .map((rule) => {
              const uniqueRule =
                detachment.units
                  .map((u) => u.rules)
                  .flat()
                  .find(
                    (r) =>
                      r.title === rule.title &&
                      r.description !== rule.description
                  ) === undefined;
              return {
                question: 'Rule',
                rules: [
                  uniqueRule ? rule.title : `${rule.title} (${unit.title})`,
                ],
                answers: [rule.description],
                box: 0,
              };
            })
            .flat()
        )
        .flat()
    )
    .flat();
};
