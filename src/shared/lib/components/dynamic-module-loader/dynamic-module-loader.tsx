import React from 'react';
import {
  AllReducers,
  DynamicReducers,
  ReduxStoreWithManager,
  useAppDispatch
} from 'app/providers/store-provider';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';

export type AllReducersKeys = keyof AllReducers;

export type ReducersList = {
  [key in AllReducersKeys]?: Reducer
}

interface Props {
  reducers: ReducersList,
  removeAfterUnmount?: boolean,
  children: React.ReactNode,
}

const DynamicModuleLoader: React.FC<Props> = (props) => {
  const { reducers, children, removeAfterUnmount = false } = props;

  const dispatch = useAppDispatch();
  const store = useStore() as ReduxStoreWithManager;

  React.useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as keyof DynamicReducers, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DELETE ${name} reducer` });
        });
      }
    };
  }, [dispatch, reducers, removeAfterUnmount, store.reducerManager]);

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

export default DynamicModuleLoader;
