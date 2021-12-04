const express = require('express');
const path = require('path')
const app = express();
const cors = require('cors');
const pool = require('./creds');
var fs = require("fs");
const { query } = require('express');

app.use(express.static('public'));
app.use(cors());
app.use(express.json());

pool.connect()

async function dbQuery(type, query){
    try{
        let res = await pool.query(query);
        if (type==='query'){
            fs.appendFileSync('query.sql', query + "\n\n")
        }
        else{
            fs.appendFileSync('transaction.sql', query + "\n\n")
        }
        return res;
    } catch(err){
        console.log(err.message);
    }
}

//get all
app.get('/flights', async(req, res)=>{
    try{
        const qtype = 'query';
        console.log("flights connected");
        await pool.query(`BEGIN TRANSACTION;`);
        let allDemos = await dbQuery(qtype, `SELECT * FROM flight;`);
        await pool.query(`COMMIT;`);
        console.table(allDemos.rows)
        res.json(allDemos.rows);
        console.log("flights disconnected")
    } catch(err){
        console.log(err.message);
    }
});

app.get('/flightID/:flight/:dept/:arr', async(req, res)=>{
    try{
        const qtype = 'query';
        const {flight,dept,arr} = req.params;
        console.log("flightsID connected");
        await pool.query(`BEGIN TRANSACTION;`);
        //switch can go here for depending on user input
        //search for things that are only not "-1234" (see flights.js)
        const allDemos = await dbQuery(qtype, `SELECT * FROM flight WHERE flight_id='${flight}';`);
        await pool.query(`COMMIT;`);
        console.table(allDemos.rows)
        res.json(allDemos.rows);
        console.log("flightsID disconnected")
    } catch(err){
        console.log(err.message);
    }
});

app.get('/boarding', async(req, res)=>{
    try{
        console.log("boarding connected");
        await pool.query(`BEGIN TRANSACTION;`);
        const allDemos = await pool.query(`SELECT * FROM boarding`);
        await pool.query(`COMMIT;`);
        console.table(allDemos.rows)
        res.json(allDemos.rows);
        console.log("boarding disconnected")
    } catch(err){
        console.log(err.message);
    }
});

app.get('/boardingInput/:boarding_input/:flight_ID/:ticket_number', async(req, res)=>{
    try{
        const qtype = 'query';
        const {boarding_input,flight_ID,ticket_number} = req.params;
        console.log("boardingInput connected");
        await pool.query(`BEGIN TRANSACTION;`);
        const allDemos = await dbQuery(qtype, `SELECT * FROM boarding WHERE boarding_id='${boarding_input}';`);
        await pool.query(`COMMIT;`);
        console.table(allDemos.rows)
        res.json(allDemos.rows);
        console.log("boardingInput disconnected")
    } catch(err){
        console.log(err.message);
    }
});

app.get('/Airplane', async(req, res)=>{
    try{
        console.log("boarding connected");
        await pool.query(`BEGIN TRANSACTION;`);
        const allDemos = await pool.query(`SELECT * FROM boarding`);
        await pool.query(`COMMIT;`);
        console.table(allDemos.rows)
        res.json(allDemos.rows);
        console.log("boarding disconnected")
    } catch(err){
        console.log(err.message);
    }
});

// set up the server listening at port 5000 (the port number can be changed)
const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`server has started on port ${port}`);
});