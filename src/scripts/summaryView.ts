console.log('summaryView');

const samolot = document.getElementsByClassName("summaryViewchoose-seat")[0];
const seatsInRow = 6;
const rows = 15;
const price = document.getElementsByClassName('value')[0];
const currencySpan = document.getElementsByClassName('currencySpan')[0];
const ticketPrice = 100;
const currencies = ['zł', 'eur', 'usd']
const exchangeCurr = [4.6039, 4.2006]

let sum = 0;
let actualCurrency = 0;

// --- tablica z wybranymi miejscami
let seats: string[] = [];

// --- funkcja zaznaczająca lub odznaczająca siedzenie
function chooseSeat(div: any) {
    let seatNumber = div.firstChild.innerHTML;
    
    if(div.classList.length == 1) {
        div.classList.add('choosed');
        seats.push(seatNumber);
    } else {
        div.classList.remove('choosed');
        let i = seats.findIndex((obj) => obj == seatNumber);
        seats.splice(i,1);
    }
    
    sum = seats.length * ticketPrice;
    let value = convertCurrency(actualCurrency);
    price.innerHTML = value.toString();
    currencySpan.innerHTML = ' ' + currencies[actualCurrency];
    
    // console.log(seats);
    // console.log(convertCurrency(0) + "eur");
    // console.log(convertCurrency(1) + "usd");
}


function convertCurrency(toCurrency: any) {
    if (toCurrency == 1) {
      return (sum / exchangeCurr[toCurrency-1]).toFixed(2);
    } else if (toCurrency == 2) {
      return (sum / exchangeCurr[toCurrency-1]).toFixed(2);
    } else {
      return sum;
    }
}

// --- funkcja tworząca "miejsce"
function createSeat(top: any, left: any, text: string) {
    let seat = document.createElement('div');
    
    seat.setAttribute('class', 'seat');
    seat.style.top = `${top}px`;
    seat.style.left = `${left}px`;
    seat.addEventListener('click', function() {
        chooseSeat(seat);
    });

    let textInside = document.createElement('h4');
    textInside.innerHTML = text;
    
    seat.appendChild(textInside);
    
    return seat;
}

// --- funkcja tworząca rzędy i miejsca w samolocie
function addSeats() {
    let left = 415;
    let seatSize = 30;
    let offsetX = 10;
    let offsetY = 20;
    let corridor = 30;
    let array = ['A','B','C','D','E','F'];

    for(let i = 1; i <= rows; i++) {
        let top = 35;

        for(let j = 0; j<seatsInRow; j++) {
            let text = i + array[j];
            samolot.appendChild(createSeat(top, left, text));

            if(j == 2) top += corridor + seatSize;
            else top += offsetX + seatSize;
        }

        left += offsetY + seatSize;
    }
}

addSeats();

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

