import { Selection } from '@battle-scribe-tools/utility/rosz2js';

export const isWarlord = (model: Selection): boolean =>
  !!model.selections.find(
    (selection) => selection.type === 'upgrade' && selection.name === 'Warlord'
  );
