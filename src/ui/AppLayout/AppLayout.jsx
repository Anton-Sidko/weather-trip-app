import TripInfo from '../../features/TripInfo/TripInfo';
import TripList from '../../features/TripsList/TripList';
import WeatherForecast from '../../features/WeatherForecast/WeatherForecast';

import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';

import './AppLayout.css';

const AppLayout = function () {
  return (
    <div className="layout">
      <div className="content">
        <Header />
        <main>
          <SearchBar placeholder="Search your trip" />
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
