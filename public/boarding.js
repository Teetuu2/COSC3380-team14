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

selectDemos();
console.log("Arrived at script")

async function selectDemos() {
    // use try... catch... to catch error
    try {
        const response = await fetch("http://localhost:5000/boarding")
        // connect to heroku, remove localhost:port
        // const response = await fetch("/demos")
        const jsonData = await response.json();
        console.log("script.js")
        console.table(jsonData)
        setDemos(jsonData);
        displayDemos();
    } catch (err) {
        console.log(err.message);
    }
}

async function selectInput() {
    try {
        let response = await fetch("http://localhost:5000/boardingInput")
        let jsonData = await response.json();
        console.table(jsonData)
        setDemos(jsonData);
        displayDemos();
    } catch (err) {
        console.log(err.message);
    }
}

function searchfunc(){
    try {
        let flight_input = document.getElementById("boardingID").value;
        let dep_arpt_input = document.getElementById("flightID").value;
        let arriv_arpt_input = document.getElementById("ticketNumber").value;
        selectInput();
    } catch (err) {
        console.log(err.message);
    }
}