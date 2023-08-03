import { useTrips } from '../../context/TripsContext';
import TripAddBtn from './TripAddBtn';
import TripItem from './TripItem';

import './TripList.css';

const TripList = function () {
  const { trips, currentTrip } = useTrips();

  return (
    <ul className="trip-list">
      {trips.map((trip) => (
        <TripItem
          key={trip.tripId}
          trip={trip}
          currentTrip={currentTrip}
        />
      ))}

      <li className="trip-item">
        <TripAddBtn />
      </li>
    </ul>
  );
};

export default TripList;
