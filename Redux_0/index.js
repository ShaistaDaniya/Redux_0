import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Components/reducer'; // Replace with your root reducer
import App from './App'; // Replace with your main application component

const store = createStore(rootReducer); // Create your Redux store with the root reducer

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
