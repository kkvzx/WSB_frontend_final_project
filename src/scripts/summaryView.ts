console.log('summaryView');

const samolot = document.getElementsByClassName("choose-seat")[0];
const seatsInRow = 6;
const rows = 15;

// --- funkcja tworząca "miejsce"
function createSeat(top: any, left: any, text: string) {
    let seat = document.createElement('div');
    
    seat.setAttribute('class', 'seat');
    seat.style.top = `${top}px`;
    seat.style.left = `${left}px`;

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