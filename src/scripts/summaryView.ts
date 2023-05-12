import "../assets/summaryView.css";
import "../assets/reset.css";

const price: HTMLElement = document.getElementsByClassName('value')[0] as HTMLElement;
const currencySpan: HTMLElement = document.getElementsByClassName('currencySpan')[0] as HTMLElement;
const ticketPrice: number = 100;
const currencies: string[] = ['zł', 'eur', 'usd'];
const exchangeCurr: number[] = [4.6039, 4.2006];

let sum: number = 0;
let actualCurrency: number = 0;

// Fetch the booking data from local storage
let bookingData = JSON.parse(localStorage.getItem('bookingData') || '{}');

// Get the selected seats from the booking data
let seats: string[] = bookingData.seats || [];

// Display the selected seats as explained in the previous response
const seatsContainer: HTMLElement = document.querySelector('.summaryViewchoose-seat') as HTMLElement;

seats.forEach(seat => {
  const seatDiv = document.createElement('div');
  seatDiv.textContent = seat;
  seatDiv.classList.add('selectedSeat'); 
  seatsContainer.appendChild(seatDiv);
});

// Calculate the total price
sum = seats.length * ticketPrice;
price.innerHTML = sum.toString();
currencySpan.innerHTML = ' ' + currencies[actualCurrency];


// Fetch the weather data for the selected city at the start
document.addEventListener('DOMContentLoaded', () => {
  const city: string = citySelect.value;
  getWeather(city);
});




function convertCurrency(toCurrency: number) {
    if (toCurrency == 1) {
        return (sum / exchangeCurr[toCurrency - 1]).toFixed(2);
    } else if (toCurrency == 2) {
        return (sum / exchangeCurr[toCurrency - 1]).toFixed(2);
    } else {
        return sum;
    }
}





const zł = document.getElementById("ZŁ");
zł.addEventListener('click', function() {
    actualCurrency = 0;
    price.innerHTML = sum.toString();
    currencySpan.innerHTML = ' ' + currencies[actualCurrency];
});

const eur = document.getElementById("EUR");
eur.addEventListener('click', function() {
    actualCurrency = 1;
    price.innerHTML = convertCurrency(actualCurrency).toString();
    currencySpan.innerHTML = ' ' + currencies[actualCurrency];
});


const usd = document.getElementById("USD");
usd.addEventListener('click', function() {
    actualCurrency = 2;
    price.innerHTML = convertCurrency(actualCurrency).toString();
    currencySpan.innerHTML = ' ' + currencies[actualCurrency];
});


const citySelect: HTMLSelectElement = document.getElementById('city') as HTMLSelectElement;
const temperatureSpan: HTMLSpanElement = document.getElementById('temperature') as HTMLSpanElement;

// funkcja do pobierania pogody dla danego miasta
async function getWeather(city: string) {
  const apiKey: string = 'a48ebb02d984830ced1a889260d4cbd9';
  const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pl&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const temperature = data.main.temp;
    temperatureSpan.innerText = temperature.toFixed(1);
  } catch (error) {
    console.error(error);
  }
}

// pobierz pogodę dla Katowic po załadowaniu strony
document.addEventListener('DOMContentLoaded', () => {
  getWeather('Katowice');
});

// obsługa zmiany miasta
citySelect.addEventListener('change', async () => {
  const city: string = citySelect.value;
  getWeather(city);
});