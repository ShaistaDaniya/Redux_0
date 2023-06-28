import React, { useEffect } from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setScreen } from './action'; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verify: {
    fontSize: 20,
  },
});

const Screen3 = () => {
  const dispatch = useDispatch();
  const currentScreen = useSelector((state) => state.currentScreen);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setScreen('Screen4'));
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.verify}>Verifying phone number</Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default Screen3;
