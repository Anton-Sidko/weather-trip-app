import './ForecastItem.css';

const ForecastItem = function ({ dayForecast }) {
  const { date, day, icon, tempMax, tempMin } = dayForecast;

  return (
    <li className="day-forecast">
      <p className="day">
        <span>{day}</span>
        {date}
      </p>
      <div className="icon">{icon}</div>
      <p className="temperature">
        <span>{tempMax}&deg;</span> / <span>{tempMin}&deg;</span>
      </p>
    </li>
  );
};

export default ForecastItem;
