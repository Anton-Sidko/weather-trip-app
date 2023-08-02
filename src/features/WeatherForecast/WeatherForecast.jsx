import ForecastItem from './ForecastItem';

import './WeatherForecast.css';

const tripForecast = [
  {
    date: '1.08',
    day: 'Monday',
    icon: '☀️',
    tempMax: '28',
    tempMin: '21',
  },
  {
    date: '2.08',
    day: 'Tuesday',
    icon: '🌤',
    tempMax: '28',
    tempMin: '21',
  },
  {
    date: '3.08',
    day: 'Wednesday',
    icon: '⛅️',
    tempMax: '18',
    tempMin: '15',
  },
  {
    date: '4.08',
    day: 'Thursday',
    icon: '☁️',
    tempMax: '18',
    tempMin: '15',
  },
  {
    date: '5.08',
    day: 'Friday',
    icon: '🌫',
    tempMax: '18',
    tempMin: '15',
  },
  {
    date: '6.08',
    day: 'Saturday',
    icon: '🌦',
    tempMax: '18',
    tempMin: '15',
  },
  {
    date: '7.08',
    day: 'Sunday',
    icon: '🌧',
    tempMax: '18',
    tempMin: '15',
  },
  {
    date: '8.08',
    day: 'Sunday',
    icon: '🌩',
    tempMax: '18',
    tempMin: '15',
  },
  {
    date: '9.08',
    day: 'Sunday',
    icon: '⛈',
    tempMax: '18',
    tempMin: '15',
  },
];

const WeatherForecast = function () {
  return (
    <div className="weather-forecast">
      <h2>Weather forecast for trip to Kyiv</h2>

      <ul className="forecast-list">
        {tripForecast.slice(0, 7).map((dayForecast) => (
          <ForecastItem
            key={dayForecast.date}
            dayForecast={dayForecast}
          />
        ))}
      </ul>
    </div>
  );
};

export default WeatherForecast;
