let demos = []

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

selectDemos();
console.log("Arrived at script")

async function selectDemos() {
    // use try... catch... to catch error
    try {
        const response = await fetch("http://localhost:5000/flights")
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