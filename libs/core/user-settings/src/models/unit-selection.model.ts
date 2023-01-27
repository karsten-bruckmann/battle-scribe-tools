/* eslint-disable no-prototype-builtins */
export type UnitSelection = {
  detachment: string;
  unit: string;
};

export function isUnitSelection(value: unknown): value is UnitSelection {
  if (typeof value !== 'object') {
    return false;
  }
  if (!value) {
    return false;
  }
  if (Object.keys(value).length !== 2) {
    return false;
  }
  if (!value.hasOwnProperty('detachment')) {
    return false;
  }
  if (!value.hasOwnProperty('unit')) {
    return false;
  }
  const selection = value as { detachment: unknown; unit: unknown };
  if (typeof selection.detachment !== 'string') {
    return false;
  }
  if (typeof selection.unit !== 'string') {
    return false;
  }

  return true;
}
