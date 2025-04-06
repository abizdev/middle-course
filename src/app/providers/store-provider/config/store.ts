import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  DynamicReducers,
  ReduxStoreWithManager,
  StaticReducers,
  ThunkExtraArg
} from './store-schema';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';
import { createReducerManager } from 'app/providers/store-provider/config/reducer-manager';
import { $api } from 'shared/api/api';
import { NavigateOptions, To } from 'react-router';

export const createReduxStore = (
  initialState?: StaticReducers,
  asyncReducers?: DynamicReducers,
  navigate?: (to: To, options?: NavigateOptions) => void | Promise<void>
) => {
  const rootReducer = combineReducers({
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer
  });

  const reducerManager = createReducerManager(rootReducer);

  const extraArg: ThunkExtraArg = {
    api: $api,
    navigate
  };


  // @ts-ignore
  const store: ReduxStoreWithManager = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg
      }
    })
  });

  store.reducerManager = reducerManager;

  return store;
};

export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore['dispatch'];
