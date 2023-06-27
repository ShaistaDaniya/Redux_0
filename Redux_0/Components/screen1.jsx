import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { setScreen } from './reducer.js'; // Assuming you have set up the reducer and action

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 223,
    height: 64,
  },
});

const FIRSTImage = () => {
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(setScreen('Screen2')); // Dispatch the action to update the current screen
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Image
          style={styles.logo}
          source={require('./FINAL-GAT-LOGO-DARK-1-webp-5000×1429-.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FIRSTImage;
