export const tripReducer = function (state, action) {
  switch (action.type) {
    case 'trip/loading-range':
      return {
        ...state,
        isLoadingRangeForecast: true,
      };

    case 'trip/loaded-range':
      return {
        ...state,
        isLoadingRangeForecast: false,
        rangeForecast: action.payload,
      };

    case 'trip/loading-today':
      return {
        ...state,
        isLoadingTodayForecast: true,
      };

    case 'trip/loaded-today':
      return {
        ...state,
        isLoadingTodayForecast: false,
        todayForecast: action.payload,
      };

    case 'trip/choose-current':
      return {
        ...state,
        currentTrip: action.payload,
      };

    case 'trip/search-trip':
      return {
        ...state,
        searchQuery: action.payload,
        filteredTrips: state.trips.filter((trip) =>
          trip.cityName.toLowerCase().includes(action.payload)
        ),
      };

    case 'trip/sort-trip':
      // As we don't need anymore unsorted trips array, we can sort it on place
      return {
        ...state,
        trips: [...state.trips].sort(
          (cur, next) =>
            new Date(cur.startDate).getTime() -
            new Date(next.startDate).getTime()
        ),
      };

    case 'rejected':
      return {
        ...state,
        isLoadingRangeForecast: false,
        isLoadingTodayForecast: false,
        error: action.payload,
      };

    case 'trip/add-trip':
      return {
        ...state,
        trips: [...state.trips, action.payload],
        isCreatingTrip: false,
      };

    case 'trip/delete-trip':
      return {
        ...state,
        trips: state.trips.filter((trip) => trip.tripId !== action.payload),
        currentTrip: null,
      };

    case 'trip/get-trip':
      return {
        ...state,
        trips: action.payload,
      };

    case 'trip/toggle-modal':
      if (state.isCreatingTrip) {
        return {
          ...state,
          isCreatingTrip: false,
        };
      }
      return {
        ...state,
        isCreatingTrip: true,
      };

    default:
      return state;
  }
};
