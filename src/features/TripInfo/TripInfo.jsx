import { useTrips } from '../../context/TripsContext';

import TripCountdown from './TripCountdown';
import Spinner from '../../ui/Spinner/Spinner';
import ErrorMessage from '../../ui/ErrorMessage/ErrorMessage';

import { getDayName } from '../../utils/helpers';
import { weatherIconSet } from '../../const';

import './TripInfo.css';

const TripInfo = function () {
  const { currentTrip, isLoadingTodayForecast, todayForecast, error } =
    useTrips();

  if (!currentTrip) {
    return (
      <div className="trip-info">
        <h2>Choose your trip to see additional info about it</h2>
      </div>
    );
  }

  if (isLoadingTodayForecast) {
    return (
      <div className="trip-info">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="trip-info">
        <ErrorMessage message={error} />
      </div>
    );
  }

  const { cityName, startDate } = currentTrip;
  const { datetime, temp, icon } = todayForecast.days[0];

  return (
    <div className="trip-info">
      <h2>{getDayName(datetime)}</h2>
      <div className="today-weather">
        <span className="weather-emoji">{weatherIconSet[icon]}</span>
        <p>
          {temp}
          <sup>&deg;C</sup>
        </p>
      </div>
      <h3>{cityName}</h3>

      <TripCountdown startDate={startDate} />
    </div>
  );
};

export default TripInfo;
