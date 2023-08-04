import { useTrips } from '../../context/TripsContext';
import ForecastItem from './ForecastItem';

import './WeatherForecast.css';

const WeatherForecast = function () {
  const { currentTrip, rangeForecast } = useTrips();
  const tripForecast = rangeForecast.days;

  if (!tripForecast || !currentTrip) return null;

  const { cityName } = currentTrip;

  return (
    <div className="weather-forecast">
      <h2>Weather forecast for trip to {cityName}</h2>

      <ul className="forecast-list">
        {tripForecast.map((dayForecast) => (
          <ForecastItem
            key={dayForecast.datetime}
            dayForecast={dayForecast}
          />
        ))}
      </ul>
    </div>
  );
};

export default WeatherForecast;
