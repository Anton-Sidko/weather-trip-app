import { useTrips } from '../../context/TripsContext';
import { cityImageList } from '../../const';

import './TripItem.css';

const TripItem = function ({ trip }) {
  const { currentTrip, chooseCurrentTrip } = useTrips();
  const { cityName, tripId, startDate, endDate } = trip;
  const isActiveTrip = currentTrip === tripId;
  const cityImage = cityImageList[cityName];

  return (
    <li
      className="trip-item"
      onClick={() => chooseCurrentTrip(tripId)}
    >
      <img
        src={cityImage}
        alt={`Photo of ${cityName}`}
      />

      <div className={`trip-descr ${isActiveTrip ? 'active' : ''}`}>
        <h3>{cityName}</h3>
        <div className="trip-dates">
          <span>{startDate}</span> - <span>{endDate}</span>
        </div>
      </div>
    </li>
  );
};

export default TripItem;
