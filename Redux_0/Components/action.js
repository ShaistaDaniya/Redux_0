export const setPhoneNumber = (phoneNumber) => {
  return {
    type: 'SET_PHONE_NUMBER',
    payload: phoneNumber,
  };
};

export const setScreen = (screenName) => {
  return {
    type: 'SET_SCREEN',
    payload: screenName,
  };
};
