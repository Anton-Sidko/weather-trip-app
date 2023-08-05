import { createContext, useContext, useEffect, useReducer } from 'react';

import { tripReducer } from './reducer';
import { initialTripState } from '../const';
import {
  fetchError,
  fetchedRangeForecast,
  fetchedTodayForecast,
  loadingRange,
  loadingToday,
  makeTripCurrent,
  toggleModal,
  setSearchQuery,
  sortTripsByStartDate,
  addTrip,
  deleteTrip,
  getTripsFromStorage,
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
      isCreatingTrip,
      rangeForecast,
      todayForecast,
      error,
      filteredTrips,
      searchQuery,
    },
    dispatch,
  ] = useReducer(tripReducer, initialTripState);

  useEffect(() => {
    const savedTrip = localStorage.getItem('trips');

    if (!savedTrip) return;

    dispatch(getTripsFromStorage(JSON.parse(savedTrip)));
  }, []);

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
    const currentTrip = trips.find((trip) => trip.tripId === tripId);
    const { cityName, startDate, endDate } = currentTrip;

    dispatch(makeTripCurrent(currentTrip));
    getTodayForecast(cityName);
    getRangeForecast(cityName, startDate, endDate);
  };

  const searchTrips = function (searchQuery) {
    dispatch(setSearchQuery(searchQuery));
  };

  const sortTrips = function () {
    dispatch(sortTripsByStartDate());
  };

  const toggleCreateTripModal = function () {
    dispatch(toggleModal());
  };

  const createTrip = function (payload) {
    dispatch(addTrip(payload));
    localStorage.setItem('trips', JSON.stringify([...trips, payload]));
  };

  const removeTrip = function (payload) {
    dispatch(deleteTrip(payload));

    const newTrips = trips.filter((trip) => trip.tripId !== payload);
    localStorage.setItem('trips', JSON.stringify(newTrips));
  };

  return (
    <TripsContext.Provider
      value={{
        trips,
        currentTrip,
        isLoadingRangeForecast,
        isLoadingTodayForecast,
        isCreatingTrip,
        rangeForecast,
        todayForecast,
        error,
        filteredTrips,
        searchQuery,
        chooseCurrentTrip,
        searchTrips,
        sortTrips,
        toggleCreateTripModal,
        createTrip,
        removeTrip,
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

export { TripsProvider, useTrips };
