import { DynamicReducers } from './store-schema';
import { Action, combineReducers, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

export function createReducerManager(initialReducers: ReducersMapObject) {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: string[] = [];

  return {
    getReducerMap: () => reducers,
    reduce: (state: ReturnType<typeof combinedReducer> | undefined, action: Action) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        for (const key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },
    add: (key: keyof DynamicReducers, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;

      combinedReducer = combineReducers(reducers);
    },
    remove: (key: string) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];

      keysToRemove.push(key);

      combinedReducer = combineReducers(reducers);
    }
  };
}

export type ReducerManager = ReturnType<typeof createReducerManager>
