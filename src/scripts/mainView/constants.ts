import { AirportData } from './interfaces/AirportData';
import { DropdownData } from './interfaces/DropdownData';
import { FlightModel } from './interfaces/FlightModel';

// export const API_KEY = '751c5fccbbd330b54786c41ed91cfff3';
export const OPEN_WEATHER_API_KEY = 'a48ebb02d984830ced1a889260d4cbd9';
export const OPENCAGEDATA_API_KEY = '765eb0efe3f644808f086b836bf0255e'; // Replace with your OpenCage API key

const EMPTY_AIRPORTDATA: AirportData = {
  name: '',
  icon: '',
  latitude: 0,
  longitude: 0,
};

export const EMPTY_FLIGHT_MODEL: FlightModel = {
  departureAirport: EMPTY_AIRPORTDATA,
  arrivalAirport: EMPTY_AIRPORTDATA,
  date: '',
  numberOfPassangers: 0,
};

export const KATOWICE_COORDINATES = {
  lon: 19.039993,
  lat: 50.270908,
};

export const DEPARTURE_AIRPORTS: DropdownData = {
  Katowice: {
    name: 'Katowice',
    icon: '🇵🇱',
    longitude: 19.039993,
    latitude: 50.270908,
  },
};

export const ARRIVAL_AIRPORTS: DropdownData = {
  Warsaw: {
    name: 'Warsaw',
    icon: '🇵🇱',
    longitude: 21.178225,
    latitude: 52.196217,
  },
  Paris: {
    name: 'Paris',
    icon: '🇫🇷',
    longitude: 2.349014,
    latitude: 48.864716,
  },
  NewYork: {
    name: 'New York',
    icon: '🇺🇸',
    longitude: -73.935242,
    latitude: 40.73061,
  },
};
