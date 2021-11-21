var pg = require('pg');

const { response } = require("express");

//Function below is called when webpage is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadTables(findName)
});

//Code in here adds onto html the table data(needs to be worked on)
function loadTables(data) {
    const table = document.querySelector('table tbody')
    let tableHtml = "";

    tableHtml += "<tr>";
    tableHtml += `<td>427956</td>`;
    tableHtml += `<td>5</td>`;
    tableHtml += `<td>Delta</td>`;
    tableHtml += `<td>Beta</td>`;
    tableHtml += `<td>123-456-7891</td>`;
    tableHtml += "</tr>";
    
    data.forEach(function ({passportID, ticketNumber, lastName, firstName, Contact}) {
        tableHtml += "<tr>";
        tableHtml += `<td>${passportID}</td>`;
        tableHtml += `<td>${ticketNumber}</td>`;
        tableHtml += `<td>${lastName}</td>`;
        tableHtml += `<td>${firstName}</td>`;
        tableHtml += `<td>${Contact}</td>`;
        tableHtml += "</tr>";
    });

    table.innerHTML = tableHtml;
}

//Everything below are queries attempts (No transactions yet)
var conString = "postgres://onkwqgmw:a6PHKnm_J7dhj58jKcXvyc06cKR3seMF@kashin.db.elephantsql.com/onkwqgmw" //Can be found in the Details page
var client = new pg.Client(conString);

async function findName() {
    try {
        await client.connect()
        let passengerTable = await client.query("SELECT * FROM Passenger")
        console.table(passengerTable.rows)
        await client.end()
        return passengerTable.rows
    }
    catch(err) {
        console.log(err)
        await client.end()
    }
}