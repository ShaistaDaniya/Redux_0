const initialState = {
  phoneNumber: '',
  currentScreen: 'Screen1',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PHONE_NUMBER':
      return {
        ...state,
        phoneNumber: action.payload,
      };
    case 'SET_SCREEN':
      return {
        ...state,
        currentScreen: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
