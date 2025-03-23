import { combineReducers, configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchema } from './store-schema';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';
import { createReducerManager } from 'app/providers/store-provider/config/reducer-manager';
import { $api } from 'shared/api/api';
import { N as NavigateOptions, T as To } from 'react-router/dist/development/route-data-aSUFWnQ6';

export const createReduxStore = (
  initialState?:  StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void | Promise<void>
) => {
  const rootReducer: ReducersMapObject<StateSchema> = combineReducers({
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  })

  const reducerManager = createReducerManager(rootReducer)

  const store: ReduxStoreWithManager = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware =>  getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
          navigate
        },
      }
    })
  })

  store.reducerManager = reducerManager

  return store;
}

export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore["dispatch"];
