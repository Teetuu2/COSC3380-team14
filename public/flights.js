let demos = [];

const setDemos = (data) => {
    demos = data;
}

// function to display demos
const displayDemos = () => {
    const demoTable = document.querySelector('#flight-table');

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
        <th>${flight.edit}</th>
        </tr>`;
    })
    demoTable.innerHTML = tableHTML
}

async function selectDemos() {
    try {
        const response = await fetch("http://localhost:5000/flights")
        const jsonData = await response.json();
        console.table(jsonData)
        setDemos(jsonData);
        displayDemos();
    } catch (err) {
        console.log(err.message);
    }
}

async function selectFlightID() {
    try {
        const response = await fetch("http://localhost:5000/flightID")
        const jsonData = await response.json();
        console.table(jsonData)
        setDemos(jsonData);
        displayDemos();
    } catch (err) {
        console.log(err.message);
    }
}

function searchfunc(){
    try {
        var flight_input = document.getElementById("flightid").value;
        var dep_arpt_input = document.getElementById("departureairport").value;
        var arriv_arpt_input = document.getElementById("arrivalairport").value;
        selectFlightID();
    } catch (err) {
        console.log(err.message);
    }
}

selectDemos();