import { AirportData } from './AirportData';

export interface FlightModel {
  departureAirport: AirportData;
  arrivalAirport: AirportData;
  date: string;
  numberOfPassangers: number;
}
