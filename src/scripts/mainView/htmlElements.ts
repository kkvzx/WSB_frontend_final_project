export const WEATHER_DEPARTURE_HEADER = document.getElementById(
  'main-view-departure-weather'
);
export const WEATHER_ARRIVAL_HEADER = document.getElementById(
  'main-view-arrival-header'
);
export const DEPARTURE_DROPDOWN = document.getElementById(
  'departureDropDown'
) as HTMLSelectElement;
export const ARRIVAL_DROPDOWN = document.getElementById(
  'arrivalDropDown'
) as HTMLSelectElement;
export const DATE_PICKER = document.getElementById(
  'datePicker'
) as HTMLInputElement;
export const LOADERS = document.querySelectorAll(
  '.loader-container'
) as NodeListOf<HTMLElement>;
export const NUMBER_OF_PASSENGERS_PICKER = document.getElementById(
  'main-view-passengers-picker'
) as HTMLInputElement;
export const SUBMIT_FORM = document.querySelector('.main-view-form-container');
export const LOGIN_MODAL = document.querySelector('.modal') as HTMLElement;
export const LOGIN_MODAL_CLOSE_BTN = document.querySelector('.close');
export const LOGIN_FORM = document.querySelector('.main-view-login-form');
export const LOGIN_FORM_USERNAME = document.querySelector(
  '#username'
) as HTMLInputElement;
export const LOGIN_FORM_PASSWORD = document.querySelector(
  '#password'
) as HTMLInputElement;
