import TripCountdown from './TripCountdown';
import './TripInfo.css';

const TripInfo = function () {
  return (
    <div className="trip-info">
      <h2>Sunday</h2>
      <div className="today-weather">
        <span className="weather-emoji">🌦</span>
        <p>
          24<sup>&deg;C</sup>
        </p>
      </div>
      <h3>Berlin</h3>

      <TripCountdown />
    </div>
  );
};

export default TripInfo;
