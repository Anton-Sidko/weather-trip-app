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
    {
      cityName: 'Rome',
      tripId: '16910485505sd45',
      startDate: '2023-08-12',
      endDate: '2023-08-17',
    },
    {
      cityName: 'Tokyo',
      tripId: '16910486sdf53753',
      startDate: '2023-08-20',
      endDate: '2023-08-23',
    },
    {
      cityName: 'Berlin',
      tripId: '16910sdf48653753',
      startDate: '2023-08-19',
      endDate: '2023-08-23',
    },
    {
      cityName: 'Warsaw',
      tripId: '16910485505sfd45',
      startDate: '2023-08-16',
      endDate: '2023-08-17',
    },
    {
      cityName: 'Barcelona',
      tripId: '16sd910486sdf53753',
      startDate: '2023-08-11',
      endDate: '2023-08-23',
    },
  ],
  filteredTrips: [],
  currentTrip: null,
  isLoadingRangeForecast: false,
  isLoadingTodayForecast: false,
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
