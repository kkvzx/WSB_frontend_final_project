import {
  API_KEY,
  KATOWICE_COORDINATES,
  OPENCAGEDATA_API_KEY,
} from './constants';
import { WEATHER_HEADER } from './htmlElements';
import { WeatherData } from './interfaces/WeatherData';

window.addEventListener('load', async () => {
  init();
});

const init = async () => {
  const position = await getUserLocation();
  const weatherData = await getCurrentWeatherData(
    position.coords.latitude,
    position.coords.longitude
  );
  const cityName = await getCityFromCoordinates(
    position.coords.latitude,
    position.coords.longitude
  );
  WEATHER_HEADER.textContent = `${cityName} | ${weatherData.temperature}°C | ${weatherData.windSpeed} km/h | ${weatherData.humidity} g/m³`;
};

const getUserLocation = async (): Promise<GeolocationPosition> => {
  return new Promise<GeolocationPosition>((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported.'));
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position);
      },
      (error) => {
        reject(new Error(`Failed to retrieve location: ${error.message}`));
      }
    );
  });
};

const getCityFromCoordinates = async (
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

const getCurrentWeatherData = async (
  lat: number,
  lon: number
): Promise<WeatherData> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
  );
  const data = await response.json();
  const temperature = data.main.temp;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  return { temperature, humidity, windSpeed };
};
