import { weatherIconSet } from '../../const';
import { formatDate, getDayName } from '../../utils/helpers';
import './ForecastItem.css';

const ForecastItem = function ({ dayForecast }) {
  const { datetime, icon, tempmax, tempmin } = dayForecast;

  return (
    <li className="day-forecast">
      <p className="day">
        <span>{getDayName(datetime)}</span>
        {formatDate(datetime)}
      </p>
      <div className="icon">{weatherIconSet[icon]}</div>
      <p className="temperature">
        <span>{tempmax}&deg;</span> / <span>{tempmin}&deg;</span>
      </p>
    </li>
  );
};

export default ForecastItem;
