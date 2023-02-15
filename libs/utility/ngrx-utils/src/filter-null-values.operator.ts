import { filter, OperatorFunction } from 'rxjs';

export const filterNullValues =
  <T>(): OperatorFunction<T | null | undefined, T> =>
  (source) =>
    source.pipe(filter((v): v is T => !!v));
