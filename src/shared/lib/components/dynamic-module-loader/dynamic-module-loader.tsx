import React from 'react';
import { ReduxStoreWithManager, StateSchemaKeys,  useAppDispatch } from 'app/providers/store-provider';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
  [name in StateSchemaKeys]?: Reducer;
}
type ReducerListEntry = [StateSchemaKeys, Reducer];

interface Props {
  reducers: ReducersList,
  removeAfterUnmount?: boolean,
  children: React.ReactNode,
}

const DynamicModuleLoader: React.FC<Props> = (props) => {
  const { reducers, children, removeAfterUnmount = false } = props;

  const dispatch = useAppDispatch();
  const store = useStore() as ReduxStoreWithManager

  React.useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer`})
    })


    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: ReducerListEntry) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DELETE ${name} reducer`})
        })
      }
    }
  }, [])

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

export default DynamicModuleLoader;
