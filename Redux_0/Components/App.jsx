import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Screen1 from './Screen1.jsx';
import Screen2 from './Screen2.jsx';
import Screen3 from './Screen3.jsx';
import Screen4 from './Screen4.jsx';
import reducer from './reducer.js';


const Stack = createNativeStackNavigator();


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
