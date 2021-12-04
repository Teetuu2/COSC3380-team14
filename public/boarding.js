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

async function selectBoarding(boarding_input, flight_ID, ticket_number) {
    try {
        const response = await fetch(`http://localhost:5000/boardingInput/${boarding_input}/${flight_ID}/${ticket_number}`, {
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
        let boarding_input = document.getElementById("boardingID").value;
        let flight_ID = document.getElementById("flightID").value;
        let ticket_number = document.getElementById("ticketNumber").value;
        let inputCheck = [boarding_input, flight_ID, ticket_number]
        for (let i=0; i < inputCheck.length; i++) {
            if (inputCheck[i] === ""){
                inputCheck[i] = "-1234"
            }
        } // this will allow function in main to decide what params to query off of
        selectBoarding(inputCheck[0],inputCheck[1],inputCheck[2]);
    } catch (err) {
        console.log(err.message);
    }
}

selectDemos();