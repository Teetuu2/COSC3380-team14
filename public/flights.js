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
        <th>${flight.edit}</th>
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

async function selectFlightID(flight, dept, arr) {
    try {
        const response = await fetch(`http://localhost:5000/flightID/${flight}/${dept}/${arr}`, {
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

function searchfunc(){
    try {
        var flight_input = document.getElementById("flightid").value;
        var dep_arpt_input = document.getElementById("departureairport").value;
        var arriv_arpt_input = document.getElementById("arrivalairport").value;
        var inputCheck = [flight_input, dep_arpt_input,arriv_arpt_input]
        for (let i=0; i< inputCheck.length; i++) {
            if (inputCheck[i] === ""){
                inputCheck[i] = "-1234"
            }
        }
        selectFlightID(inputCheck[0],inputCheck[1],inputCheck[2]);
    } catch (err) {
        console.log(err.message);
    }
}

selectDemos();