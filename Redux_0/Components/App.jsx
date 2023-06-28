import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setScreen } from './reducer'; // Assuming you have set up the reducer and action

const App = () => {
  const currentScreen = useSelector((state) => state.currentScreen);
  const dispatch = useDispatch();

  const navigate = (screenName) => {
    dispatch(setScreen(screenName));
  };

  let screenComponent;
  switch (currentScreen) {
    case 'Screen1':
      screenComponent = <Screen1 />;
      break;
    case 'Screen2':
      screenComponent = <Screen2 />;
      break;
    case 'Screen3':
      screenComponent = <Screen3 />;
      break;
    case 'Screen4':
      screenComponent = <Screen4 />;
      break;
    default:
      screenComponent = <Screen1 />;
  }

  return ()=>{screenComponent};
};

export default App;
