export const setLanguage = text => {
  return {
    type: 'APP_LANGUAGE',
    payload: {
      text,
    },
  };
};
