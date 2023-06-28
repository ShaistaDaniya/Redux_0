import React, { useState, useRef } from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, Linking } from 'react-native';
import { useDispatch } from 'react-redux';
import { setScreen } from './action';

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
  enter: {
    width: 'auto',
    height: 'auto',
    marginTop: 30,
    marginLeft: 100,
    marginRight: 100,
    fontSize: 16,
    lineHeight: 18,
  },
  prevnum: {
    width: 'auto',
    height: 'auto',
    marginLeft: 105,
  },
  regview: {
    fontSize: 16,
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
    width: 212,
    marginLeft: 82,
    marginRight: 82,
  },
  buttonDarkBlue: {
    backgroundColor: 'darkblue',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  passcodeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  passcodeBox: {
    flex: 0,
    height: 56,
    width: 46,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 24,
    textAlign: 'center',
    paddingHorizontal: 0,
    marginHorizontal: 8,
    marginLeft: 1,
  },
  selectedPasscodeBox: {
    borderColor: 'darkblue',
    borderWidth: 2,
  },
  filledPasscodeBox: {
    borderColor: 'darkblue',
    borderWidth: 1,
  },
  filledPasscodeBoxError: {
    borderColor: 'red',
    borderWidth: 2,
  },
  resend: {
    fontSize: 16,
    marginLeft: 124,
    marginRight: 94,
    marginBottom: 298,
    width: 'auto',
    height: 'auto',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 8,
  },
});

const Screen4 = () => {
  const dispatch = useDispatch();
  const [passcode, setPasscode] = useState(['', '', '', '']);
  const [passcodeError, setPasscodeError] = useState(false);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const passcodeInputs = useRef([]);

  const handlePasscodeChange = (index, value) => {
    const updatedPasscode = [...passcode];
    updatedPasscode[index] = value;
    setPasscode(updatedPasscode);

    if (!value && index > 0) {
      passcodeInputs.current[index - 1].focus();
    } else if (value && index < passcodeInputs.current.length - 1) {
      passcodeInputs.current[index + 1].focus();
    }
  };

  const handleVerifyPasscode = () => {
    const correctPasscode = '1234'; 
    if (passcode.join('') === correctPasscode) {
      console.log('Passcode is correct. Updating screen using Redux...');
      dispatch(setScreen('Screen5')); 
    } else {
      setPasscodeError(true);
      setPasscode(['', '', '', '']);
      passcodeInputs.current[0].focus();
      setWrongAttempts((prevAttempts) => prevAttempts + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./FINAL-GAT-LOGO-DARK-1-webp-5000×1429-.png')}
      />
      <Text style={styles.enter}>Enter the passcode</Text>
      <View style={styles.passcodeContainer}>
        {passcode.map((digit, index) => (
          <TextInput
            key={index}
            style={[
              styles.passcodeBox,
              digit ? styles.filledPasscodeBox : null,
              passcodeError ? styles.filledPasscodeBoxError : null,
            ]}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(value) => handlePasscodeChange(index, value)}
            value={digit}
            ref={(input) => (passcodeInputs.current[index] = input)}
          />
        ))}
      </View>
      {passcodeError && <Text style={styles.errorText}>Incorrect passcode. Try again.</Text>}
      <TouchableOpacity
        style={[styles.button, passcode.join('') === '' ? null : styles.buttonDarkBlue]}
        onPress={handleVerifyPasscode}
      >
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
      <Text style={styles.resend} onPress={() => Linking.openURL('http://www.example.com')}>
        Resend code
      </Text>
    </View>
  );
};

export default Screen4;
