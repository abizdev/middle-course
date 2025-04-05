import React from 'react';
import {
  ReduxStoreWithManager,
  StateSchemaKeys,
  useAppDispatch
} from 'app/providers/store-provider';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
  [name in StateSchemaKeys]?: Reducer;
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
      store.reducerManager.add(name as StateSchemaKeys, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKeys);
          dispatch({ type: `@DELETE ${name} reducer` });
        });
      }
    };
  }, []);

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

export default DynamicModuleLoader;
