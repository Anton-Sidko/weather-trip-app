import './TripCountdown.css';

const TripCountdown = function () {
  return (
    <div className="countdown">
      <div className="countdown-item">
        <span>30</span>
        <div className="caption">days</div>
      </div>
      <div className="countdown-item">
        <span>15</span>
        <div className="caption">hours</div>
      </div>
      <div className="countdown-item">
        <span>15</span>
        <div className="caption">minutes</div>
      </div>
      <div className="countdown-item">
        <span>24</span>
        <div className="caption">seconds</div>
      </div>
    </div>
  );
};

export default TripCountdown;
