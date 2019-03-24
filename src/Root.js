import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import async from './middlewares/async';
import stateValidator from './middlewares/stateValidator';
import rootReducer from './reducers';

const Root = ({ initialState = {}, children }) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(async, stateValidator));
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default Root;
