// Screen2.jsx
import React from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setPhoneNumber } from './redux/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 223,
    height: 64,
    flex: 0,
    order: 0,
    flexGrow: 0,
  },
  register: {
    width: 227,
    height: 28,
    marginTop: 60,
    marginLeft: 16,
    fontSize: 16,
    lineHeight: 28,
  },
  regview: {
    fontSize: 16,
  },
  num: {
    height: 56,
    borderColor: 'blue',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    margin: 16,
  },
  button: {
    marginTop: 23,
    backgroundColor: 'lightgray',
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    height: 42,
    margin: 16,
  },
  activeButton: {
    marginTop: 23,
    backgroundColor: 'darkblue',
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    height: 42,
    margin: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginLeft: 16,
    marginRight: 16,
  },
  text: {
    padding: 12,
    fontSize: 16,
    lineHeight: 19.92,
    marginLeft: 16,
    marginRight: 16,
  },
  Need: {
    padding: 10,
    fontSize: 16,
    lineHeight: 19.92,
    textAlign: 'center',
    marginTop: 248,
  },
  supportText: {
    padding: 10,
    fontSize: 16,
    lineHeight: 19.92,
    textAlign: 'center',
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

const Screen2 = ({ navigation }) => {
  const dispatch = useDispatch();
  const phoneNumber = useSelector((state) => state.phoneNumber);

  const handleTap = () => {
    console.log('Tapped');
  };

  const handleNextButton = () => {
    if (phoneNumber.length === 10) {
      navigation.navigate('Screen3');
    }
  };

  const handlePhoneNumberChange = (number) => {
    dispatch(setPhoneNumber(number)); // Dispatch the action to store the phone number in Redux state
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleTap}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./FINAL-GAT-LOGO-DARK-1.webp')}
        />
        <PhoneNumberInput
          phoneNumber={phoneNumber}
          onPhoneNumberChange={handlePhoneNumberChange}
          onNextButton={handleNextButton}
        />
      </View>
    </TouchableOpacity>
  );
};

const PhoneNumberInput = ({ phoneNumber, onPhoneNumberChange, onNextButton }) => {
  const handleNextButton = () => {
    onNextButton();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.register}>Register With Us</Text>
      <Text style={styles.text}>
        We need your phone number so we can verify you as a user. We won't use your number for anything else.
      </Text>
      <TextInput
        style={styles.num}
        keyboardType="numeric"
        placeholder="Enter Phone Number"
        onChangeText={onPhoneNumberChange}
        value={phoneNumber}
      />
      <TouchableOpacity
        style={phoneNumber.length === 10 ? styles.activeButton : styles.button}
        onPress={handleNextButton}
        disabled={phoneNumber.length !== 10}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <Text style={styles.Need}>
        Why do we need your phone number?{' '}
        <Text style={styles.supportText} onPress={() => Linking.openURL('https://www.example.com/')}>
          Learn More
        </Text>
      </Text>
    </View>
  );
};

export default Screen2;
