import { ARRIVAL_AIRPORTS, DEPARTURE_AIRPORTS, OPENCAGEDATA_API_KEY, OPEN_WEATHER_API_KEY } from './constants';
import {
  ARRIVAL_DROPDOWN,
  DATE_PICKER,
  DEPARTURE_DROPDOWN,
  LOADERS,
  LOGIN_FORM_PASSWORD,
  LOGIN_FORM_USERNAME,
  LOGIN_MODAL,
  NUMBER_OF_PASSENGERS_PICKER,
  WEATHER_ARRIVAL_HEADER,
  WEATHER_DEPARTURE_HEADER,
} from './htmlElements';
import { DropdownData } from './interfaces/DropdownData';
import { FlightModel } from './interfaces/FlightModel';
import { LoginDataDto } from './interfaces/LoginDataDto';
import { WeatherDataDto } from './interfaces/WeatherDataDto';

export const init = async () => {
  showLoader();
  const position = await getUserLocation();
  const { latitude, longitude } = position.coords;
  const weatherDepartureData = await getCurrentWeatherData(latitude, longitude);
  const weatherArrivalData = await getCurrentWeatherData(
    ARRIVAL_AIRPORTS.Warsaw.latitude,
    ARRIVAL_AIRPORTS.Warsaw.longitude
  );
  const cityName = await getCityFromCoordinates(latitude, longitude);
  const cityOfDepartureKey = Object.keys(DEPARTURE_AIRPORTS).find(
    (airportKey) => DEPARTURE_AIRPORTS[airportKey].name === cityName
  );
  const cityNameToDispaly = cityOfDepartureKey
    ? DEPARTURE_AIRPORTS[cityOfDepartureKey].name +
      ' ' +
      DEPARTURE_AIRPORTS[cityOfDepartureKey].icon
    : cityName;

  WEATHER_DEPARTURE_HEADER.textContent = `${cityNameToDispaly} | ${weatherDepartureData.temperature}°C | ${weatherDepartureData.windSpeed} km/h | ${weatherDepartureData.humidity} g/m³`;
  WEATHER_ARRIVAL_HEADER.textContent = `${ARRIVAL_AIRPORTS.Warsaw.name} ${ARRIVAL_AIRPORTS.Warsaw.icon} | ${weatherArrivalData.temperature}°C | ${weatherArrivalData.windSpeed} km/h | ${weatherArrivalData.humidity} g/m³`;
  hideLoader();
};

export const saveFormData = (model: FlightModel) => {
  model.departureAirport = DEPARTURE_AIRPORTS[DEPARTURE_DROPDOWN.value];
  model.arrivalAirport = ARRIVAL_AIRPORTS[ARRIVAL_DROPDOWN.value];
  model.date = DATE_PICKER.value;
  model.numberOfPassangers = Number(NUMBER_OF_PASSENGERS_PICKER.value);
};

export const getUserLocation = async (): Promise<GeolocationPosition> => {
  return new Promise<GeolocationPosition>((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported.'));
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position);
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          resolve({
            coords: {
              latitude: DEPARTURE_AIRPORTS.Katowice.latitude,
              longitude: DEPARTURE_AIRPORTS.Katowice.longitude,
              accuracy: 0,
              altitude: undefined,
              altitudeAccuracy: undefined,
              heading: undefined,
              speed: undefined,
            },
            timestamp: 0,
          });
        } else {
          reject(new Error(`Failed to retrieve location: ${error.message}`));
        }
      }
    );
  });
};

export const getCityFromCoordinates = async (
  latitude: number,
  longitude: number
): Promise<string> => {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${OPENCAGEDATA_API_KEY}`;

  return new Promise<string>((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.results.length > 0) {
          const city = data.results[0].components.city;
          if (city) {
            resolve(city);
          } else {
            reject(new Error('City not found.'));
          }
        } else {
          reject(new Error('Location not found.'));
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getCurrentWeatherData = async (
  lat: number,
  lon: number
): Promise<WeatherDataDto> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
  );
  const data = await response.json();
  const temperature = data.main.temp;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  return { temperature, humidity, windSpeed };
};

export const createDropdown = (
  dropdownData: DropdownData,
  selectedHtmlElement: HTMLElement
) => {
  for (let key in dropdownData) {
    const selectedCity = dropdownData[key];
    let option = document.createElement('option');
    option.setAttribute('value', key);

    let optionText = document.createTextNode(
      `${selectedCity.name} ${selectedCity.icon}`
    );
    option.appendChild(optionText);

    selectedHtmlElement.appendChild(option);
  }
};

export const setMinDateForDatePicker = () => {
  const minDate = new Date().toISOString().split('T')[0];
  DATE_PICKER.setAttribute('min', minDate);
};

export const showLoader = () => {
  LOADERS.forEach((loader) => {
    loader.style.display = 'grid';
  });
  WEATHER_ARRIVAL_HEADER.style.display = 'none';
  WEATHER_DEPARTURE_HEADER.style.display = 'none';
};

export const hideLoader = () => {
  LOADERS.forEach((loader) => {
    loader.style.display = 'none';
  });
  WEATHER_ARRIVAL_HEADER.style.display = 'block';
  WEATHER_DEPARTURE_HEADER.style.display = 'block';
};

export async function handleLoginFormSubmit() {
  const url = 'detailsView.html';
  if (!LOGIN_FORM_USERNAME || !LOGIN_FORM_PASSWORD) {
    console.error('Could not find username and/or password input elements.');
    return;
  }
  fetch('users.json')
    .then((response) => response.json())
    .then((loginData) => {
      const isLoginAndPasswordMatch = loginData.users.find(
        (user: LoginDataDto) =>
          user.username === LOGIN_FORM_USERNAME.value &&
          user.password === LOGIN_FORM_PASSWORD.value
      );

      if (isLoginAndPasswordMatch) {
        alert('Login successful!');
        window.location.href = url;
      } else {
        alert('Username or password is incorrect. Please try again.');
      }
    })
    .catch((error) => {
      console.error('Error fetching login data:', error);
      alert('Error logging in. Please try again later.');
    });
}

export const openModal = () => {
  LOGIN_MODAL.style.display = 'block';
};

export const closeModal = () => {
  LOGIN_MODAL.style.display = 'none';
};
