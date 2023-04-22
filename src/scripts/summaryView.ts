
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

