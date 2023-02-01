import { BSPrayerCharacteristic, PrayerProfile, TypeName } from '../types';
import AbstractProfileConverter from './AbstractProfileConverter';

class PrayerProfileConverter extends AbstractProfileConverter<
  PrayerProfile,
  BSPrayerCharacteristic
> {
  constructor() {
    super({
      typeName: TypeName.PRAYERS,
      name: '-',
      effect: '-',
    });
  }

  protected getProperty(
    bsCharacteristic: BSPrayerCharacteristic
  ): Partial<PrayerProfile> {
    switch (bsCharacteristic.$.name) {
      case 'Effect':
        return { effect: bsCharacteristic._ };
    }
  }
}

export default PrayerProfileConverter;
