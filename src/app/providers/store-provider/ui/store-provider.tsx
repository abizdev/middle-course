import React from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/store-schema';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router';


interface Props {
  children: React.ReactNode;
  initialState?: StateSchema;
  asyncReducers?: ReducersMapObject<StateSchema>
}

const StoreProvider: React.FC<Props> = (props) => {
  const { children, initialState, asyncReducers } = props;
  const navigate = useNavigate()

  const store = createReduxStore(initialState, asyncReducers, navigate)

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default StoreProvider;
