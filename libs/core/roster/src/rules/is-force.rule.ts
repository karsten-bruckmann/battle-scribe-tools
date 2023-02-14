import { Force, Selection } from '@battle-scribe-tools/utility/rosz2js';

export function isForce(selection: Force | Selection): selection is Force {
  // eslint-disable-next-line no-prototype-builtins
  return !selection.hasOwnProperty('profiles');
}
