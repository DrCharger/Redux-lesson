const languageReducer = (state = 'en', action) => {
  switch (action.type) {
    case 'APP_LANGUAGE':
      return action.payload.text;
    default:
      return state;
  }
};

export default languageReducer;
