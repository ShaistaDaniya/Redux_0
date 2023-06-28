import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Components/reducer'; // Replace with your root reducer
import App from './App'; // Replace with your main application component
import { AppRegistry, Platform } from 'react-native';

const store = createStore(rootReducer); // Create your Redux store with the root reducer

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

// Register the component for React Native
AppRegistry.registerComponent('X', () => Root);

// Check the platform and run the application accordingly
if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('X');
  AppRegistry.runApplication('X', { rootTag });
}

