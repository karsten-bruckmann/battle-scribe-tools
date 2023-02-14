import { MetaReducer } from '@ngrx/store';
import { CoreReducer } from './core-reducer.type';

type ReducerRegistry<T> = {
  add: (reducer: CoreReducer<T>) => void;
  metaReducer: MetaReducer<T>;
};

export const coreReducerRegistry = <T>(): ReducerRegistry<T> => {
  const reducers: CoreReducer<T>[] = [];
  const add = (reducer: CoreReducer<T>) => {
    reducers.push(reducer);
  };
  const metaReducer: MetaReducer<T> = (reducer) => (state, action) => {
    let next = reducer(state, action);
    reducers.forEach((coreReducer) => {
      next = coreReducer(next, action);
    });
    return next;
  };

  return {
    add,
    metaReducer,
  };
};
