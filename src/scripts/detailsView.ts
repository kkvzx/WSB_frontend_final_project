import "../assets/detailsView.css"
import "../assets/reset.css"

type TestObject = {
  departureAirport: {
    name: string;
    icon: string;
    longitude: number;
    latitude: number;
  };
  arrivalAirport: {
    name: string;
    icon: string;
    longitude: number;
    latitude: number;
  };
  date: string;
  numberOfPassangers: number;
};


type Aircraft = {
  name: string;
  seats: number;
  seatsPerRow: number;
  numberOfPassangers?: number;
};

  window.addEventListener('load', async () => {
    init();
  
  });
  let testObject: TestObject;

  function init() {
    const test = localStorage.getItem("model");
    testObject = JSON.parse(test);
    console.log(testObject);
  
    if (testObject) {
      
      const selectedAircraft = selectAircraft(testObject.arrivalAirport.name);
      selectedAircraft.numberOfPassangers = testObject.numberOfPassangers;
      const destinationSelect = document.getElementById("destination") as HTMLSelectElement;
  
      // Clear previous options
      destinationSelect.innerHTML = "";
  
      // Create new option element
      const optionElement = document.createElement("option");
      optionElement.value = getDestinationByAircraftName(selectedAircraft.name);
      optionElement.textContent = selectedAircraft.name;
  
      // Append the new option to the select
      destinationSelect.appendChild(optionElement);
  
      updateSeats(selectedAircraft);
    }
  }
  
  
  
  const destinationSelect = document.getElementById("destination") as HTMLSelectElement;
  const seatSelect = document.getElementById("seats") as HTMLDivElement;
  const bookButton = document.getElementById("book") as HTMLButtonElement;
  
  const aircrafts: Record<string, Aircraft> = {
    embraer: {
      name: "Embraer",
      seats: 30,
      seatsPerRow: 3,
    },
    boeing737: {
      name: "Boeing 737",
      seats: 60,
      seatsPerRow: 4,
    },
    dreamliner787: {
      name: "Dreamliner 787",
      seats: 100,
      seatsPerRow: 6,
    },
  };
  
  function numberToLabel(number: number, seatsPerRow: number): string {
    const rowNum = Math.floor((number - 1) / seatsPerRow) + 1;
    const letterIndex = ((number - 1) % seatsPerRow) + 65;
    const letter = String.fromCharCode(letterIndex === 64 ? 65 : letterIndex);
    return `${rowNum}${letter}`;
  }
  
  function getDestinationByAircraftName(aircraftName: string): string {
    switch (aircraftName) {
      case "Embraer":
        return "domestic";
      case "Boeing 737":
        return "medium";
      case "Dreamliner 787":
        return "long";
      default:
        return "medium";
    }
  }
  
  function updateSeats(aircraft: Aircraft): void {
    // Clear seat options
    seatSelect.innerHTML = "";
  
    const numRows = aircraft.seats / aircraft.seatsPerRow;
  
    for (let row = 1; row <= numRows; row++) {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("detailsView-row");
      seatSelect.appendChild(rowDiv);
  
      for (let seatInRow = 1; seatInRow <= (aircraft.name === "Dreamliner 787" ? aircraft.seatsPerRow - 1 : aircraft.seatsPerRow) + 1; seatInRow++) {
        if (aircraft.name === "Dreamliner 787" && seatInRow === 4) {
          const aisle = document.createElement("div");
          aisle.classList.add("detailsView-aisle");
          rowDiv.appendChild(aisle);
        }
  
        if (aircraft.name === "Embraer" && seatInRow === 3) {
          const aisle = document.createElement("div");
          aisle.classList.add("detailsView-aisle");
          rowDiv.appendChild(aisle);
          continue;
        }
  
        if (aircraft.name === "Boeing 737" && seatInRow === 3) {
          const aisle = document.createElement("div");
          aisle.classList.add("detailsView-aisle");
          rowDiv.appendChild(aisle);
          continue;
        }
  
        const seatNumber = (row - 1) * (aircraft.name === "Dreamliner 787" ? aircraft.seatsPerRow - 1 : aircraft.seatsPerRow) + seatInRow - (seatInRow > (aircraft.name === "Embraer" ? 3 : 4) ? 2 : 1);;
        const seatDiv = document.createElement("div");
        seatDiv.classList.add("detailsView-seat");
        seatDiv.dataset.seatNumber = seatNumber.toString();
        seatDiv.innerHTML = `<div class="detailsView-seat-label">${numberToLabel(seatNumber, aircraft.seatsPerRow)}</div>`;
        seatDiv.addEventListener("click", function () {
          const selectedSeats = document.querySelectorAll(".detailsView-seat.selected");
          if (!seatDiv.classList.contains("selected") && selectedSeats.length >= aircraft.numberOfPassangers) {
            alert(`You can only select ${aircraft.numberOfPassangers} seat(s).`);
            return;
          }
          seatDiv.classList.toggle("selected");
        });
        rowDiv.appendChild(seatDiv);
      }
    }
  }
  
  function selectAircraft(arrivalCity: string): Aircraft {
    switch (arrivalCity) {
      case "Warsaw":
        return aircrafts.embraer;
      case "Paris":
        return aircrafts.boeing737;
      case "New York":
        return aircrafts.dreamliner787;
      default:
        return aircrafts.boeing737;
    }
  }
  
  // Initialize seats
  updateSeats(selectAircraft(destinationSelect.value));
  
  // Handle destination change
  destinationSelect.addEventListener("change", function () {
    updateSeats(selectAircraft(destinationSelect.value));
  });
  
  // Handle book button click
  bookButton.addEventListener("click", function () {
    const selectedDestination = (document.getElementById("destination") as HTMLSelectElement).value;
    const selectedBaggage = (document.getElementById("baggage") as HTMLSelectElement).value;
    const selectedSeats = document.querySelectorAll(".detailsView-seat.selected");
  
    const selectedAircraft = selectAircraft(selectedDestination);
  
    if (selectedSeats.length !== selectedAircraft.numberOfPassangers) {
      alert(`Please select ${selectedAircraft.numberOfPassangers} seat(s).`);
      return;
    }
  
    const selectedSeatLabels = Array.from(selectedSeats).map((selectedSeatDiv: HTMLDivElement) => {
      const seatNumber = parseInt(selectedSeatDiv.dataset.seatNumber);
      return numberToLabel(seatNumber, selectedAircraft.seatsPerRow);
    });
  
    // Save the necessary data to localStorage here
    const bookingData = {
      destination: selectedDestination,
      baggage: selectedBaggage,
      seats: selectedSeatLabels
    };
  
    localStorage.setItem('bookingData', JSON.stringify(bookingData));
  
    // Navigate to the summary page.
    window.location.href = 'summaryView.html';
  });
  
  