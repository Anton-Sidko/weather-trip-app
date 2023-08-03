import { TripsProvider } from './context/TripsContext';
import AppLayout from './ui/AppLayout/AppLayout';

const App = function () {
  return (
    <TripsProvider>
      <AppLayout />
    </TripsProvider>
  );
};

export default App;

