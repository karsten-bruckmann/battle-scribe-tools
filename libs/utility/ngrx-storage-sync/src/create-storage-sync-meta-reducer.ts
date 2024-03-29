import { MetaReducer } from '@ngrx/store';

interface AllOptions<T> {
  storage: Storage;
  serialize: (state: T) => string;
  parse: (serialized: string | null) => T | undefined;
}

export type Options<T> = {
  [key in keyof AllOptions<T>]?: AllOptions<T>[key];
};

export const getDefaultOptions = <T>(): AllOptions<T> => ({
  storage: sessionStorage,
  serialize: (state) => JSON.stringify(state),
  parse: (serialized) => {
    if (!serialized) {
      return undefined;
    }
    try {
      return JSON.parse(serialized);
    } catch (e) {
      return undefined;
    }
  },
});

export const createStorageSyncMetaReducerImplementation =
  <T>(
    defaultOptions: AllOptions<T>,
    storageKey: string,
    options?: Options<T>
  ): MetaReducer<T> =>
  (reducer) =>
  (state, action) => {
    const allOptions: AllOptions<T> = {
      ...defaultOptions,
      ...options,
    };

    let currentState = state;
    if (currentState === undefined) {
      currentState = allOptions.parse(allOptions.storage.getItem(storageKey));
    }

    const nextState = reducer(currentState, action);

    allOptions.storage.setItem(storageKey, allOptions.serialize(nextState));
    return nextState;
  };

export const createStorageSyncMetaReducer = <T>(
  storageKey: string,
  options?: Options<T>
) =>
  createStorageSyncMetaReducerImplementation(
    getDefaultOptions<T>(),
    storageKey,
    options
  );
