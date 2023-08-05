export const initialTripState = {
  trips: [
    {
      cityName: 'Klaipeda',
      tripId: '1691048653753',
      startDate: '2023-08-14',
      endDate: '2023-08-23',
    },
    {
      cityName: 'Kharkiv',
      tripId: '1691048550545',
      startDate: '2023-08-10',
      endDate: '2023-08-12',
    },
  ],
  filteredTrips: [],
  currentTrip: null,
  isLoadingRangeForecast: false,
  isLoadingTodayForecast: false,
  isCreatingTrip: false,
  rangeForecast: {},
  todayForecast: {},
  error: '',
  searchQuery: '',
};

export const cityList = [
  'Kyiv',
  'Kharkiv',
  'Berlin',
  'Tokyo',
  'Barcelona',
  'Warsaw',
  'London',
  'Vilnius',
  'Klaipeda',
  'Rome',
];

export const cityImageList = {
  Kyiv: '/kyiv.jpg',
  Kharkiv: '/kharkiv.jpg',
  Berlin: '/berlin.jpg',
  Tokyo: '/tokyo.jpg',
  Barcelona: '/barcelona.jpg',
  Warsaw: '/warsaw.jpg',
  London: '/london.jpg',
  Vilnius: '/vilnius.jpg',
  Klaipeda: '/klaipeda.jpg',
  Rome: '/rome.jpg',
};

export const weatherIconSet = {
  snow: '🌨',
  rain: '🌧',
  fog: '🌫',
  wind: '💨',
  cloudy: '☁',
  'partly-cloudy-day': '⛅',
  'partly-cloudy-night': '⛅',
  'clear-day': '☀',
  'clear-night': '🌕',
};
