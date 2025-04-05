import { CounterSchema } from 'entities/counter';
import { UserSchema } from 'entities/user';
import { LoginSchema } from 'features/auth-by-username';
import { Action, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/profile';
import { AxiosInstance } from 'axios';
import { N as NavigateOptions, T as To } from 'react-router/dist/development/route-data-aSUFWnQ6';

export interface StateSchema {
  counter: CounterSchema,
  user: UserSchema,

  // async reducers
  login?: LoginSchema,
  profile?: ProfileSchema,
}

export type StateSchemaKeys = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>,
  reduce: (state: StateSchema, action: Action) => ReducersMapObject<StateSchema>,
  add: (key: StateSchemaKeys, reducer: Reducer) => void
  remove: (key: StateSchemaKeys) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance,
  navigate?: (to: To, options?: NavigateOptions) => void | Promise<void>
}

export interface ThunkConfig<T> {
  rejectValue: T,
  extra: ThunkExtraArg,
}
