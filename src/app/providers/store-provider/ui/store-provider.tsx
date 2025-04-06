import React from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { useNavigate } from 'react-router';
import { DynamicReducers, StaticReducers } from '../config/store-schema';

interface Props {
  children: React.ReactNode;
  initialState?: StaticReducers;
  asyncReducers?: DynamicReducers;
}

const StoreProvider: React.FC<Props> = (props) => {
  const { children, initialState, asyncReducers } = props;
  const navigate = useNavigate();

  const store = createReduxStore(initialState, asyncReducers, navigate);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default StoreProvider;
