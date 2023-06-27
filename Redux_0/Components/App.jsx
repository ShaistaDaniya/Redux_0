import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Screen1 from './Screen1.jsx';
import Screen2 from './screen2.jsx';
import Screen3 from './screen3.jsx';
import Screen4 from './screen4.jsx';

const Stack = createNativeStackNavigator();

// Redux Reducer
const initialState = {
  phoneNumber: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_PHONE_NUMBER':
      return {
        ...state,
        phoneNumber: action.payload,
      };
    default:
      return state;
  }
}

// Redux Store
const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen1">
          <Stack.Screen
            name="Screen1"
            component={Screen1}
            options={{
              title: 'Screen 1',
            }}
          />
          <Stack.Screen
            name="Screen2"
            component={Screen2}
            options={{
              title: 'Screen 2',
            }}
          />
          <Stack.Screen
            name="Screen3"
            component={Screen3}
            options={{
              title: 'Screen 3',
            }}
          />
          <Stack.Screen
            name="Screen4"
            component={Screen4}
            options={{
              title: 'Screen 4',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
