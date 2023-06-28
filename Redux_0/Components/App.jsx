import React, { useEffect, useState, useCallback } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import dataReducer from './dataReducer';
import { CONSTANTS } from './constants';
import { saveInitialData, setScreen } from './reducer';

const App = () => {
  const [fetched, setFetched] = useState(false);
  const currentScreen = useSelector((state) => state.currentScreen);
  const dispatch = useDispatch();

  const saveInitialDataHandler = useCallback((data) => {
    dispatch(saveInitialData(data));
  }, [dispatch]);

  const navigate = useCallback((screenName) => {
    dispatch(setScreen(screenName));
  }, [dispatch]);

  const rootReducer = combineReducers({
    content: dataReducer,
  });

  const store = createStore(rootReducer);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(CONSTANTS.database)
      .then((response) => response.json())
      .then((responseJSON) => {
        setFetched(true);
        saveInitialDataHandler(responseJSON);
      });
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

  if (!fetched) {
    return (
      <Provider store={store}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Loading...</Text>
        </View>
      </Provider>
    );
  } else {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.SafeAreaView}>
          {screenComponent}
        </SafeAreaView>
      </Provider>
    );
  }
};

const styles = StyleSheet.create({
  SafeAreaView: { flex: 1 },
});

export default App;
