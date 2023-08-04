import TripInfo from '../../features/TripInfo/TripInfo';
import TripList from '../../features/TripsList/TripList';
import WeatherForecast from '../../features/WeatherForecast/WeatherForecast';
import ControlBar from '../ControlBar/ControlBar';

import Header from '../Header/Header';

import './AppLayout.css';

const AppLayout = function () {
  return (
    <div className="layout">
      <div className="content">
        <Header />
        <main>
          <ControlBar />
          <TripList />
          <WeatherForecast />
        </main>
      </div>

      <div className="sidebar-info">
        <TripInfo />
      </div>
    </div>
  );
};

export default AppLayout;
