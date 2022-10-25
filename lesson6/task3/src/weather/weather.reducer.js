import { WEATHER_RECEIVED } from './weather.actions';

const initialData = {
  citiesList: [],
};

const weatherReducer = (state = initialData, action) => {
  switch (action.type) {
    case WEATHER_RECEIVED:
      return {
        ...state,
        citiesList: action.payload.userData,
      };
    default:
      return state;
  }
};

export default weatherReducer;
