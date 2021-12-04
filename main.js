const express = require('express');
const path = require('path')
const app = express();
const cors = require('cors');
const pool = require('./creds');

app.use(express.static('public'));
app.use(cors());
app.use(express.json());

pool.connect()

//get all
app.get('/flights', async(req, res)=>{
    try{
        console.log("flights connected");
        pool.query(`BEGIN TRANSACTION;`);
        let allDemos = await pool.query(`SELECT * FROM flight;`);
        pool.query(`COMMIT;`);
        console.table(allDemos.rows)
        res.json(allDemos.rows);
        console.log("flights disconnected")
    } catch(err){
        console.log(err.message);
    }
});

app.get('/flightID', async(req, res)=>{
    try{
        console.log("flightsID connected");
        pool.query(`BEGIN TRANSACTION;`);
        let flight_inputs = 'US930';
        let allDemos = await pool.query(`SELECT * FROM flight WHERE flight_id='${flight_inputs}';`);
        pool.query(`COMMIT;`);
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
        pool.query(`BEGIN TRANSACTION;`);
        const allDemos = await pool.query(`SELECT * FROM boarding`);
        pool.query(`COMMIT;`);
        console.table(allDemos.rows)
        res.json(allDemos.rows);
        console.log("boarding disconnected")
    } catch(err){
        console.log(err.message);
    }
});

app.get('/Airplane', async(req, res)=>{
    try{
        console.log("boarding connected");
        pool.query(`BEGIN TRANSACTION;`);
        const allDemos = await pool.query(`SELECT * FROM boarding`);
        pool.query(`COMMIT;`);
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