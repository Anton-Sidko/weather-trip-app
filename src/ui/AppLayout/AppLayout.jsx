import { useTrips } from '../../context/TripsContext';

import CreateTrip from '../../features/CreateTrip/CreateTrip';
import TripInfo from '../../features/TripInfo/TripInfo';
import TripList from '../../features/TripsList/TripList';
import WeatherForecast from '../../features/WeatherForecast/WeatherForecast';
import ControlBar from '../ControlBar/ControlBar';

import Header from '../Header/Header';

import './AppLayout.css';

const AppLayout = function () {
  const { isCreatingTrip } = useTrips();

  return (
    <div className="layout">
      <div className="content">
        <Header />
        <main>
          <ControlBar />
          <TripList />
          <WeatherForecast />
        </main>
        {isCreatingTrip && <CreateTrip />}
      </div>

      <div className="sidebar-info">
        <TripInfo />
      </div>
    </div>
  );
};

export default AppLayout;
