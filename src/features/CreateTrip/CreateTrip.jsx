import CreateTripForm from './CreateTripForm';

import './CreateTrip.css';
import { useTrips } from '../../context/TripsContext';

const CreateTrip = function () {
  const { toggleCreateTripModal } = useTrips();

  return (
    <div className="create-trip-modal">
      <div className="modal-header">
        <h3>Create trip</h3>
        <button onClick={toggleCreateTripModal}>&times;</button>
      </div>

      <CreateTripForm />
    </div>
  );
};

export default CreateTrip;
