export const WEATHER_RECEIVED = 'WEATHER_RECEIVED';
import { fetchWeatherData } from './weather.gateways';

export const wetherReceived = userData => {
  return {
    type: WEATHER_RECEIVED,
    payload: {
      userData,
    },
  };
};
export const getWeatherData = () => {
  return function (dispatch) {
    fetchWeatherData().then(userData => {
      dispatch(wetherReceived(userData));
    });
  };
};
