import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers';

const Root = (props) => {
  return (
    <Provider store={createStore(rootReducer, {})}>
      {props.children}
    </Provider>
  );
};

export default Root;
