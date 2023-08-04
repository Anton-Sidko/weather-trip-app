import { useEffect, useState } from 'react';
import { calcTimesLeft } from '../../utils/helpers';

import './TripCountdown.css';

const TripCountdown = function ({ startDate }) {
  const [countdown, setCountdown] = useState(
    calcTimesLeft(startDate) || [0, 0, 0, 0]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newCountdown = calcTimesLeft(startDate);
      if (!newCountdown) {
        clearInterval(intervalId);
        return;
      }

      setCountdown(newCountdown);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [startDate]);

  const [days, hours, minutes, seconds] = countdown;

  return (
    <div className="countdown">
      <div className="countdown-item">
        <span>{days}</span>
        <div className="caption">days</div>
      </div>
      <div className="countdown-item">
        <span>{hours}</span>
        <div className="caption">hours</div>
      </div>
      <div className="countdown-item">
        <span>{minutes}</span>
        <div className="caption">minutes</div>
      </div>
      <div className="countdown-item">
        <span>{seconds}</span>
        <div className="caption">seconds</div>
      </div>
    </div>
  );
};

export default TripCountdown;
