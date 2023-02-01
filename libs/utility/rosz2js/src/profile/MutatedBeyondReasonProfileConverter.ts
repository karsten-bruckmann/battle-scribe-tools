import {
  BSMutatedBeyondReasonCharacteristic,
  MutatedBeyondReasonProfile,
  TypeName,
} from '../types';
import AbstractProfileConverter from './AbstractProfileConverter';

class MutatedBeyondReasonProfileConverter extends AbstractProfileConverter<
  MutatedBeyondReasonProfile,
  BSMutatedBeyondReasonCharacteristic
> {
  constructor() {
    super({
      typeName: TypeName.MUTATED_BEYOND_REASON,
      name: '-',
      effect: '-',
    });
  }

  protected getProperty(
    bsCharacteristic: BSMutatedBeyondReasonCharacteristic
  ): Partial<MutatedBeyondReasonProfile> {
    switch (bsCharacteristic.$.name) {
      case 'Effect':
        return { effect: bsCharacteristic._ };
    }
  }
}

export default MutatedBeyondReasonProfileConverter;
