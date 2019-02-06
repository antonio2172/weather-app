import { combineReducers } from 'redux';
import { cities, getForecastDataFromCities as _getForecastDataFromCities } from './cities';
import { city } from './city';

export default combineReducers({
    // myCities: cities,
    // currentCity: city,
    cities,
    city,
});

export const getCity = state => state.city;

export const getForecastDataFromCities = state => (_getForecastDataFromCities(state.cities, getCity(state)));