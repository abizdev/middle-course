import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit';
import { StateSchema } from './store-schema';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';
import { loginReducer } from 'features/auth-by-username';

export const createReduxStore = (initialState?:  StateSchema) => {
  const rootReducer: Reducer<StateSchema> = combineReducers({
    counter: counterReducer,
    user: userReducer,
    login: loginReducer
  })

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}

export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<AppStore["getState"]>;
