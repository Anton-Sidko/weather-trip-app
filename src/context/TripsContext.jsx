import { createContext, useContext, useReducer } from 'react';

import { tripReducer } from './reducer';
import { initialTripState } from '../const';
import {
  fetchError,
  fetchedRangeForecast,
  fetchedTodayForecast,
  loadingRange,
  loadingToday,
  makeTripCurrent,
} from './actions';
import {
  getForecastByCityOnDateRange,
  getForecastByCityOnToday,
} from '../services/apiWeather';

const TripsContext = createContext({});

const TripsProvider = function ({ children }) {
  const [
    {
      trips,
      currentTrip,
      isLoadingRangeForecast,
      isLoadingTodayForecast,
      rangeForecast,
      todayForecast,
      error,
    },
    dispatch,
  ] = useReducer(tripReducer, initialTripState);

  const getRangeForecast = async function (city, startDate, endDate) {
    dispatch(loadingRange());

    try {
      const data = await getForecastByCityOnDateRange(city, startDate, endDate);

      dispatch(fetchedRangeForecast(data));
    } catch (error) {
      dispatch(fetchError(error.message));
    }
  };

  const getTodayForecast = async function (city) {
    dispatch(loadingToday());

    try {
      const data = await getForecastByCityOnToday(city);

      dispatch(fetchedTodayForecast(data));
    } catch (error) {
      dispatch(fetchError(error.message));
    }
  };

  const chooseCurrentTrip = function (tripId) {
    const { cityName, startDate, endDate } = trips.find(
      (trip) => trip.tripId === tripId
    );

    dispatch(makeTripCurrent(tripId));
    getTodayForecast(cityName);
  };

  return (
    <TripsContext.Provider
      value={{
        trips,
        currentTrip,
        isLoadingRangeForecast,
        isLoadingTodayForecast,
        rangeForecast,
        todayForecast,
        error,
        getRangeForecast,
        getTodayForecast,
        chooseCurrentTrip,
      }}
    >
      {children}
    </TripsContext.Provider>
  );
};

const useTrips = function () {
  const context = useContext(TripsContext);

  if (context === undefined)
    throw new Error('TripsContext was used outside the TripsProvider');

  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { TripsProvider, useTrips };
