const API_URL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const API_SETTINGS = '?unitGroup=metric&include=days&contentType=json&key=';

// place API_KEY here is BAD practice in real project, but for training and study purpose we can do it
const API_KEY = 'TE9MZRRZJS4WUG2L4UZT8RA7M';

export const getForecastByCityOnToday = async function (city) {
  const res = await fetch(`${API_URL}${city}/today${API_SETTINGS}${API_KEY}`);

  if (!res.ok) throw Error(`Couldn't find forecast for ${city} on today`);

  const data = await res.json();
  return data;
};

export const getForecastByCityOnDateRange = async function (
  city,
  startDate,
  endDate
) {
  const res = await fetch(
    `${API_URL}${city}/${startDate}/${endDate}${API_SETTINGS}${API_KEY}`
  );

  if (!res.ok)
    throw Error(`Couldn't find forecast for ${city} on your date range`);

  const data = await res.json();
  return data;
};
