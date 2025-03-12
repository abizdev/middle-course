import React from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/store-schema';


interface Props {
  children: React.ReactNode;
  initialState?: StateSchema;
}

const StoreProvider: React.FC<Props> = (props) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState)

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default StoreProvider;
