import {
  isBSAbilitiesProfile,
  isBSExplosionProfile,
  isBSMutatedBeyondReasonProfile,
  isBSPrayerProfile,
  isBSPsychicPowerProfile,
  isBSPsykerProfile,
  isBSTransportProfile,
  isBSUnitProfile,
  isBSWeaponProfile,
  isBSWoundTrackProfile,
} from '../guards';
import { BSCharacteristic, BSProfile, Profile, TypeName } from '../types';
import AbilityProfileConverter from './AbilityProfileConverter';
import AbstractProfileConverter from './AbstractProfileConverter';
import ExplosionProfileConverter from './ExplosionProfileConverter';
import MutatedBeyondReasonProfileConverter from './MutatedBeyondReasonProfileConverter';
import PrayerProfileConverter from './PrayerProfileConverter';
import PsychicPowerProfileConverter from './PsychicPowerProfileConverter';
import PsykerProfileConverter from './PsykerProfileConverter';
import TransportProfileConverter from './TransportProfileConverter';
import UnitProfileConverter from './UnitProfileConverter';
import UnknownProfileConverter from './UnknownProfileConverter';
import WeaponProfileConverter from './WeaponProfileConverter';
import WoundTrackProfileConverter from './WoundTrackProfileConverter';

class ProfileFactory {
  static getProfile(bsProfile: BSProfile<BSCharacteristic>): Profile<TypeName> {
    let converter: AbstractProfileConverter<
      Profile<TypeName>,
      BSCharacteristic
    >;

    if (isBSWeaponProfile(bsProfile)) converter = new WeaponProfileConverter();
    else if (isBSUnitProfile(bsProfile)) converter = new UnitProfileConverter();
    else if (isBSAbilitiesProfile(bsProfile))
      converter = new AbilityProfileConverter();
    else if (isBSWoundTrackProfile(bsProfile))
      converter = new WoundTrackProfileConverter();
    else if (isBSTransportProfile(bsProfile))
      converter = new TransportProfileConverter();
    else if (isBSPsychicPowerProfile(bsProfile))
      converter = new PsychicPowerProfileConverter();
    else if (isBSPsykerProfile(bsProfile))
      converter = new PsykerProfileConverter();
    else if (isBSPrayerProfile(bsProfile))
      converter = new PrayerProfileConverter();
    else if (isBSExplosionProfile(bsProfile))
      converter = new ExplosionProfileConverter();
    else if (isBSMutatedBeyondReasonProfile(bsProfile))
      converter = new MutatedBeyondReasonProfileConverter();
    else
      converter = new UnknownProfileConverter(
        (bsProfile as { $: { name: string } }).$.name
      );

    return converter.convert(bsProfile);
  }
}

export default ProfileFactory;
