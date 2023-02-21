import { InjectionToken } from '@angular/core';

export const TRANSLATION_MODE_DISABLED = new InjectionToken<boolean>(
  'TRANSLATION_MODE_DISABLED',
  {
    providedIn: 'root',
    factory: () => false,
  }
);
