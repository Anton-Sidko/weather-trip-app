export const loadingRange = () => ({
  type: 'trip/loading-range',
});

export const fetchedRangeForecast = (payload) => ({
  type: 'trip/loaded-range',
  payload,
});

export const loadingToday = () => ({
  type: 'trip/loading-today',
});

export const fetchedTodayForecast = (payload) => ({
  type: 'trip/loaded-today',
  payload,
});

export const fetchError = (payload) => ({
  type: 'rejected',
  payload,
});

export const makeTripCurrent = (payload) => ({
  type: 'trip/choose-current',
  payload,
});

export const setSearchQuery = (payload) => ({
  type: 'trip/search-trip',
  payload,
});

export const sortTripsByStartDate = () => ({
  type: 'trip/sort-trip',
});
