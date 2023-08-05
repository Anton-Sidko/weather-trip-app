import { useTrips } from '../../context/TripsContext';
import Button from '../Button/Button';
import SearchBar from '../SearchBar/SearchBar';

import './ControlBar.css';

const ControlBar = function () {
  const { trips, sortTrips } = useTrips();

  return (
    <div className="control-bar">
      <SearchBar placeholder="Search your trip" />
      {trips.length > 0 && (
        <Button
          onClick={sortTrips}
          type="secondary"
        >
          Sort trips by start date
        </Button>
      )}
    </div>
  );
};

export default ControlBar;
