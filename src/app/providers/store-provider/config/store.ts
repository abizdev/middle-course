import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit';
import { StateSchema } from './store-schema';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';

export const createReduxStore = (initialState?:  StateSchema) => {
  const rootReducer:  Reducer<StateSchema> = combineReducers({
    counter: counterReducer,
    user: userReducer,
  })

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}
