let demos = []

const setDemos = (data) => {
    demos = data;
}

// function to display demos
const displayDemos = () => {
    const demoTable = document.querySelector('#boardingtabledata');

    let tableHTML = "";
    demos.map(flight =>{
        tableHTML +=
        `<tr key=${flight.boarding_id}>
        <th>${flight.boarding_id}</th>
        <th>${flight.flight_id}</th>
        <th>${flight.ticket_no}</th>
        <th>${flight.boarding_time}</th>
        <th>${flight.gate}</th>
        <th>${flight.seat_no}</th>
        <th>${flight.baggage_id}</th>
        </tr>`;
    })
    demoTable.innerHTML = tableHTML
}

async function selectDemos() {
    try {
        const response = await fetch("http://localhost:5000/boarding")
        const jsonData = await response.json();
        console.table(jsonData)
        setDemos(jsonData);
        displayDemos();
    } catch (err) {
        console.log(err.message);
    }
}

async function selectBoarding(boarding_input) {
    try {
        const response = await fetch(`http://localhost:5000/boardingInput/${boarding_input}`, {
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

function searchBoarding(){
    try {
        let boarding_input = document.getElementById("boardingID").value;
        selectBoarding(boarding_input);
    } catch (err) {
        console.log(err.message);
    }
}

async function selectFlight(flight) {
    try {
        const response = await fetch(`http://localhost:5000/boardingFlight/${flight}`, {
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

function searchFlight(){
    try {
        let flight_input = document.getElementById("flightID").value;
        selectFlight(flight_input);
    } catch (err) {
        console.log(err.message);
    }
}

async function selectTicket(ticket) {
    try {
        const response = await fetch(`http://localhost:5000/boardingTicket/${ticket}`, {
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

function searchTicket(){
    try {
        let ticket = document.getElementById("ticketNumber").value;
        selectTicket(ticket);
    } catch (err) {
        console.log(err.message);
    }
}

selectDemos();