let demos = [];

const setDemos = (data) => {
    demos = data;
}

// function to display demos
const displayDemos = () => {
    let demoTable = document.querySelector('#airplanetemptable');

    let tableHTML = "";
    demos.map(flight =>{
        tableHTML +=
        `<tr key=${flight.aircraft_code}>
        <th>${flight.aircraft_code}</th>
        <th>${flight.model}</th>
        </tr>`;
    })
    demoTable.innerHTML = tableHTML
}

async function selectDemos() {
    try {
        let response = await fetch("http://localhost:5000/Airplane")
        let jsonData = await response.json();
        console.table(jsonData)
        setDemos(jsonData);
        displayDemos();
    } catch (err) {
        console.log(err.message);
    }
}

async function selectCode(planeCode) {
    try {
        const response = await fetch(`http://localhost:5000/planeCode/${planeCode}`, {
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

function searchCode(){
    try {
        let planeCode = document.getElementById("aircraftcode").value;
        selectCode(planeCode);
    } catch (err) {
        console.log(err.message);
    }
}

async function selectModel(modelType) {
    try {
        const response = await fetch(`http://localhost:5000/model/${modelType}`, {
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

function searchModel(){
    try {
        let model = document.getElementById("modeltype").value;
        selectModel(model);
    } catch (err) {
        console.log(err.message);
    }
}

selectDemos();