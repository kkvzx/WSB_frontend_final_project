import {
  ARRIVAL_AIRPORTS,
  DEPARTURE_AIRPORTS,
  EMPTY_FLIGHT_MODEL,
} from './constants';
import {
  closeModal,
  createDropdown,
  getCurrentWeatherData,
  handleLoginFormSubmit,
  hideLoader,
  init,
  openModal,
  saveFormData,
  setMinDateForDatePicker,
  showLoader,
} from './function';
import {
  ARRIVAL_DROPDOWN,
  DEPARTURE_DROPDOWN,
  LOGIN_FORM,
  LOGIN_MODAL_CLOSE_BTN,
  SUBMIT_FORM,
  WEATHER_ARRIVAL_HEADER,
} from './htmlElements';

const model = EMPTY_FLIGHT_MODEL;

window.addEventListener('load', async () => {
  init();
  createDropdown(DEPARTURE_AIRPORTS, DEPARTURE_DROPDOWN);
  createDropdown(ARRIVAL_AIRPORTS, ARRIVAL_DROPDOWN);
  setMinDateForDatePicker();
});

ARRIVAL_DROPDOWN.addEventListener('change', async (event) => {
  if (
    event.target instanceof HTMLSelectElement &&
    event.target.value !== 'none'
  ) {
    showLoader();
    const selectedCity = event.target.value;
    const selectedCityData = ARRIVAL_AIRPORTS[selectedCity];
    const weatherData = await getCurrentWeatherData(
      selectedCityData.latitude,
      selectedCityData.longitude
    );
    WEATHER_ARRIVAL_HEADER.textContent = `${selectedCityData.name} ${selectedCityData.icon} | ${weatherData.temperature}°C | ${weatherData.windSpeed} km/h | ${weatherData.humidity} g/m³`;
    hideLoader();
  }
});

SUBMIT_FORM.addEventListener('submit', (event) => {
  event.preventDefault();
  saveFormData(model);
  openModal();
});

LOGIN_MODAL_CLOSE_BTN.addEventListener('click', () => closeModal());

LOGIN_FORM.addEventListener('submit', (event) => {
  event.preventDefault();
  handleLoginFormSubmit();
});
