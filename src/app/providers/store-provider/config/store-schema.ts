import { AxiosInstance } from 'axios';
import { EnhancedStore } from '@reduxjs/toolkit';
import { NavigateOptions, To } from 'react-router';
import { ReducerManager } from './reducer-manager';
import { LoginSchema } from 'features/auth-by-username';
import { CounterSchema } from 'entities/counter';
import { UserSchema } from 'entities/user';
import { ProfileSchema } from 'entities/profile';

export type StaticReducers = {
  counter: CounterSchema,
  user: UserSchema,
}

export type DynamicReducers = {
  login?: LoginSchema,
  profile?: ProfileSchema,
}

export type AllReducers = StaticReducers & DynamicReducers

export interface ReduxStoreWithManager extends EnhancedStore<AllReducers> {
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
