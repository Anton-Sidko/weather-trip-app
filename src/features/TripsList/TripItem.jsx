import './TripItem.css';

const TripItem = function ({ trip }) {
  const { cityName, cityImage, activeTrip } = trip;

  return (
    <li className="trip-item">
      <img
        src={cityImage}
        alt={`Photo of ${cityName}`}
      />

      <div className={`trip-descr ${activeTrip ? 'active' : ''}`}>
        <h3>{cityName}</h3>
        <div className="trip-dates">
          <span>14.07.2023</span> - <span>21.07.2023</span>
        </div>
      </div>
    </li>
  );
};

export default TripItem;
