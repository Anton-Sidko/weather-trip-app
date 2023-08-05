import { useTrips } from '../../context/TripsContext';
import './TripAddBtn.css';

const TripAddBtn = function () {
  const { toggleCreateTripModal } = useTrips();

  return (
    <button
      className="add-trip-btn"
      onClick={toggleCreateTripModal}
    >
      <span>+</span>Add trip
    </button>
  );
};

export default TripAddBtn;
