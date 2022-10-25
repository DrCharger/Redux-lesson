export const FILTERED = 'USERS/FILTERED';

export const filtering = event => {
  return {
    type: FILTERED,
    payload: {
      event,
    },
  };
};
