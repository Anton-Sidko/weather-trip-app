import TripAddBtn from './TripAddBtn';
import TripItem from './TripItem';

import './TripList.css';

const cityList = [
  {
    cityName: 'Kyiv',
    cityImage: '/kyiv.jpg',
    tripId: '1',
    activeTrip: true,
  },
  {
    cityName: 'Kharkiv',
    cityImage: '/kharkiv.jpg',
    tripId: '1',
  },
  {
    cityName: 'Berlin',
    cityImage: '/berlin.jpg',
    tripId: '1',
  },
  {
    cityName: 'Tokyo',
    cityImage: '/tokyo.jpg',
    tripId: '1',
  },
  {
    cityName: 'Barcelona',
    cityImage: '/barcelona.jpg',
    tripId: '1',
  },
  {
    cityName: 'Warsaw',
    cityImage: '/warsaw.jpg',
    tripId: '1',
  },
  {
    cityName: 'London',
    cityImage: '/london.jpg',
    tripId: '1',
  },
  {
    cityName: 'Vilnius',
    cityImage: '/vilnius.jpg',
    tripId: '1',
  },
  {
    cityName: 'Klaipeda',
    cityImage: '/klaipeda.jpg',
    tripId: '1',
  },
  {
    cityName: 'Rome',
    cityImage: '/rome.jpg',
    tripId: '1',
  },
  {
    cityName: 'New York',
    cityImage: '/new-york.jpg',
    tripId: '1',
  },
];

const TripList = function () {
  return (
    <ul className="trip-list">
      {cityList.slice(0, 3).map((trip, i) => (
        <TripItem
          key={trip.tripId + i}
          trip={trip}
        />
      ))}

      <TripAddBtn />
    </ul>
  );
};

export default TripList;
