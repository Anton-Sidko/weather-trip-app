import { useState } from 'react';

import { cityList } from '../../const';

import './CreateTripForm.css';
import { useTrips } from '../../context/TripsContext';
import Button from '../../ui/Button/Button';

const CreateTripForm = function () {
  const { toggleCreateTripModal, createTrip } = useTrips();

  const now = new Date();
  const nowString = new Date().toISOString().split('T')[0];
  const minDate = nowString;
  const maxDate = new Date(now.getTime() + 15 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0];

  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState(nowString);
  const [endDate, setEndDate] = useState(nowString);
  const [maxStartDate, setMaxStartDate] = useState(maxDate);
  const [minEndDate, setMinEndDate] = useState(minDate);

  const handleSubmit = function (e) {
    e.preventDefault();

    const newTrip = {
      cityName: city,
      tripId: String(now.getTime()),
      startDate: startDate,
      endDate: endDate,
    };

    createTrip(newTrip);
  };

  const handleStartDateChange = function (e) {
    setStartDate(e.target.value);
    setMinEndDate(e.target.value);
  };
  const handleEndDateChange = function (e) {
    setEndDate(e.target.value);
    setMaxStartDate(e.target.value);
  };

  const handleCancel = function (e) {
    e.preventDefault();
    toggleCreateTripModal();
  };

  return (
    <form
      className="create-trip-form"
      onSubmit={handleSubmit}
    >
      <div className="input-wrapper">
        <label htmlFor="selectCityInput">
          <span>*</span>City
        </label>

        <select
          id="selectCityInput"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        >
          <option
            value=""
            disabled
          >
            Please select a city
          </option>
          {cityList.map((city) => (
            <option
              value={city}
              key={city}
            >
              {city}
            </option>
          ))}
        </select>
      </div>

      <div className="input-wrapper">
        <label htmlFor="startDateInput">
          <span>*</span>Start date
        </label>
        <input
          type="date"
          id="startDateInput"
          value={startDate}
          min={minDate}
          max={maxStartDate}
          required
          onChange={handleStartDateChange}
        />
      </div>

      <div className="input-wrapper">
        <label htmlFor="endDateInput">
          <span>*</span>End date
        </label>
        <input
          type="date"
          id="endDateInput"
          value={endDate}
          min={minEndDate}
          max={maxDate}
          required
          onChange={handleEndDateChange}
        />
      </div>

      <div className="form-button-wrapper">
        <Button
          type="secondary"
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button type="primary">Save</Button>
      </div>
    </form>
  );
};

export default CreateTripForm;
