import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Screen1 from './screen1.jsx';
import Screen2 from './screen2.jsx';
import Screen3 from './screen3.jsx';
import Screen4 from './screen4.jsx';
import reducer from './reducer.js';
import { useDispatch, useSelector } from 'react-redux';

const initialState = {
  currentScreen: 'Screen1', // Initial screen
};

const SET_SCREEN = 'SET_SCREEN';

// Action creator for setting the current screen
const setScreen = (screenName) => ({
  type: SET_SCREEN,
  payload: screenName,
});

// Reducer to handle the screen state
const screenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCREEN:
      return {
        ...state,
        currentScreen: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(screenReducer);

const App = () => {
  const currentScreen = useSelector((state) => state.currentScreen);
  const dispatch = useDispatch();

  const navigate = (screenName) => {
    dispatch(setScreen(screenName));
  };

  let screenComponent;
  switch (currentScreen) {
    case 'Screen1':
      screenComponent = <Screen1 navigate={navigate} />;
      break;
    case 'Screen2':
      screenComponent = <Screen2 navigate={navigate} />;
      break;
    case 'Screen3':
      screenComponent = <Screen3 navigate={navigate} />;
      break;
    case 'Screen4':
      screenComponent = <Screen4 navigate={navigate} />;
      break;
    default:
      screenComponent = <Screen1 navigate={navigate} />;
  }

  return <Provider store={store}>{screenComponent}</Provider>;
};

export default App;
