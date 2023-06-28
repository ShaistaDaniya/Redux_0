const initialState = {
    data: null,
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SAVE_INITIAL_DATA':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  