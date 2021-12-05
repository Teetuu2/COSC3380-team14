let demos = [];

const setDemos = (data) => {
    demos = data;
}

// function to display demos
const displayDemos = () => {
    let demoTable = document.querySelector('#flight-table');

    let tableHTML = "";
    demos.map(flight =>{
        tableHTML +=
        `<tr key=${flight.flight_id}>
        <th>${flight.flight_id}</th>
        <th>${flight.departure_date}</th>
        <th>${flight.departure_time}</th>
        <th>${flight.arrival_date}</th>
        <th>${flight.arrival_time}</th>
        <th>${flight.departure_airport}</th>
        <th>${flight.arrival_airport}</th>
        </tr>`;
    })
    demoTable.innerHTML = tableHTML
}

async function selectDemos() {
    try {
        let response = await fetch("http://localhost:5000/flights")
        let jsonData = await response.json();
        console.table(jsonData)
        setDemos(jsonData);
        displayDemos();
    } catch (err) {
        console.log(err.message);
    }
}

async function selectFlightID(flight) {
    try {
        const response = await fetch(`http://localhost:5000/flightID/${flight}`, {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
        const jsonData = await response.json();
        console.table(jsonData)
        setDemos(jsonData);
        displayDemos();
    } catch (err) {
        console.log(err.message);
    }
}

function searchFlightID(){
    try {
        let flight_input = document.getElementById("flightid").value;
        selectFlightID(flight_input);
    } catch (err) {
        console.log(err.message);
    }
}

async function selectDeparture(departure) {
    try {
        const response = await fetch(`http://localhost:5000/departure/${departure}`, {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
        const jsonData = await response.json();
        console.table(jsonData)
        setDemos(jsonData);
        displayDemos();
    } catch (err) {
        console.log(err.message);
    }
}

function searchDeparture(){
    try {
        let departureInput = document.getElementById("departureairport").value;
        selectDeparture(departureInput);
    } catch (err) {
        console.log(err.message);
    }
}

async function selectArrival(arrival) {
    try {
        const response = await fetch(`http://localhost:5000/arrival/${arrival}`, {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
        const jsonData = await response.json();
        console.table(jsonData)
        setDemos(jsonData);
        displayDemos();
    } catch (err) {
        console.log(err.message);
    }
}

function searchArrival(){
    try {
        let arriv_arpt_input = document.getElementById("arrivalairport").value;
        selectArrival(arriv_arpt_input);
    } catch (err) {
        console.log(err.message);
    }
}

selectDemos();