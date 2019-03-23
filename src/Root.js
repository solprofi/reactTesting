import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

import rootReducer from './reducers';

const Root = ({initialState = {}, children}) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(reduxPromise));
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default Root;
