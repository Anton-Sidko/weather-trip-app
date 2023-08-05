import { useTrips } from '../../context/TripsContext';
import Spinner from '../../ui/Spinner/Spinner';
import ForecastItem from './ForecastItem';

import './WeatherForecast.css';

const WeatherForecast = function () {
  const { currentTrip, rangeForecast, isLoadingRangeForecast } = useTrips();
  const tripForecast = rangeForecast.days;

  if (!tripForecast || !currentTrip) return null;

  if (isLoadingRangeForecast) {
    return (
      <div className="weather-forecast">
        <Spinner />
      </div>
    );
  }

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
