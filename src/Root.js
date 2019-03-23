import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers';

const Root = ({initialState = {}, children}) => {
  return (
    <Provider store={createStore(rootReducer, initialState )}>
      {children}
    </Provider>
  );
};

export default Root;
