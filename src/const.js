export const initialTripState = {
  trips: [
    {
      cityName: 'Kharkiv',
      tripId: '1691048550545',
      startDate: '10-08-2023',
      endDate: '12-08-2023',
    },
    {
      cityName: 'Klaipeda',
      tripId: '1691048653753',
      startDate: '14-08-2023',
      endDate: '21-08-2023',
    },
  ],
  currentTrip: null,
  isLoadingRangeForecast: false,
  isLoadingTodayForecast: false,
  rangeForecast: {},
  todayForecast: {},
  error: '',
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
