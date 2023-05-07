const destinationSelect = document.getElementById('destination');
const seatSelect = document.getElementById('seats');
const bookButton = document.getElementById('book');

// Define aircrafts
const aircrafts = {
    embraer: {
      name: 'Embraer',
      seats: 30,
      seatsPerRow: 3,
    },
    boeing737: {
      name: 'Boeing 737',
      seats: 60,
      seatsPerRow: 4,
    },
    dreamliner787: {
      name: 'Dreamliner 787',
      seats: 100,
      seatsPerRow: 6,
    },
};

function numberToLabel(number, seatsPerRow) {
    const rowNum = Math.floor((number - 1) / seatsPerRow) + 1;
    const letterIndex = ((number - 1) % seatsPerRow) + 65;
    const letter = String.fromCharCode(letterIndex === 64 ? 65 : letterIndex);
    return `${rowNum}${letter}`;
}

function updateSeats(aircraft) {
    // Clear seat options
    seatSelect.innerHTML = '';

    const numRows = aircraft.seats / aircraft.seatsPerRow;

    // Generate seat options
    for (let row = 1; row <= numRows; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('detailsView-row');
        seatSelect.appendChild(rowDiv);

        for (let seatInRow = 1; seatInRow <= aircraft.seatsPerRow + 1; seatInRow++) {
            if (aircraft.name === "Dreamliner 787" && seatInRow === 4) {
                const aisle = document.createElement('div');
                aisle.classList.add('detailsView-aisle');
                rowDiv.appendChild(aisle);
            }

            if (aircraft.name === "Embraer" && seatInRow === 3) {
                const aisle = document.createElement('div');
                aisle.classList.add('detailsView-aisle');
                rowDiv.appendChild(aisle);
                continue;
            }

            if (aircraft.name === "Boeing 737" && seatInRow === 3) {
                const aisle = document.createElement('div');
                aisle.classList.add('detailsView-aisle');
                rowDiv.appendChild(aisle);
                continue;
            }

            const seatNumber = (row - 1) * aircraft.seatsPerRow + seatInRow - (seatInRow > (aircraft.name === "Embraer" ? 3 : 4) ? 2 : 1);
            const seatDiv = document.createElement('div');
            seatDiv.classList.add('detailsView-seat');
            seatDiv.dataset.seatNumber = seatNumber;
            seatDiv.innerHTML = `<div class="detailsView-seat-label">${numberToLabel(seatNumber, aircraft.seatsPerRow)}</div>`;
            seatDiv.addEventListener('click', function () {
                // Remove selected class from other seats
                const selectedSeats = document.querySelectorAll('.detailsView-seat.selected');
                selectedSeats.forEach((selectedSeat) => {
                    selectedSeat.classList.remove('selected');
                });

                // Add selected class to the clicked seat
                seatDiv.classList.add('selected');
            });
            rowDiv.appendChild(seatDiv);
        }
    }
}

function selectAircraft(destination) {
    switch (destination) {
        case 'domestic':
            return aircrafts.embraer;
        case 'medium':
            return aircrafts.boeing737;
        case 'long':
            return aircrafts.dreamliner787;
        default:
            return aircrafts.boeing737
        }
    }
    
    // Initialize seats
    updateSeats(selectAircraft(destinationSelect.value));
    
    // Handle destination change
    destinationSelect.addEventListener('change', function () {
        updateSeats(selectAircraft(destinationSelect.value));
    });
    
    // Handle book button click
    bookButton.addEventListener('click', function () {
        const selectedDestination = document.getElementById('destination').value;
        const selectedBaggage = document.getElementById('baggage').value;
        const selectedSeatDiv = document.querySelector('.detailsView-seat.selected');
    
        if (!selectedSeatDiv) {
            alert('Please select a seat.');
            return;
        }
    
        const selectedAircraft = selectAircraft(selectedDestination);
        const selectedSeat = numberToLabel(parseInt(selectedSeatDiv.dataset.seatNumber), selectedAircraft.seatsPerRow);
    
        alert(`Destination: ${selectedDestination}\nBaggage: ${selectedBaggage}\nSeat: ${selectedSeat}`);
    });