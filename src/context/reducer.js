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
    case 'rejected':
      return {
        ...state,
        isLoadingRangeForecast: false,
        isLoadingTodayForecast: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
