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

app.get('/flightID/:flight', async(req, res)=>{
    try{
        const qtype = 'query';
        const {flight} = req.params;
        console.log("flightsID connected");
        await pool.query(`BEGIN TRANSACTION;`);
        const allDemos = await dbQuery(qtype, `SELECT * FROM flight WHERE flight_id='${flight}';`);
        await pool.query(`COMMIT;`);
        console.table(allDemos.rows)
        res.json(allDemos.rows);
        console.log("flightsID disconnected")
    } catch(err){
        console.log(err.message);
    }
});

app.get('/departure/:departure', async(req, res)=>{
    try{
        const qtype = 'query';
        const {departure} = req.params;
        console.log("departure connected");
        await pool.query(`BEGIN TRANSACTION;`);
        const allDemos = await dbQuery(qtype, `SELECT * FROM flight WHERE departure_airport='${departure}';`);
        await pool.query(`COMMIT;`);
        console.table(allDemos.rows)
        res.json(allDemos.rows);
        console.log("departure disconnected")
    } catch(err){
        console.log(err.message);
    }
});

app.get('/arrival/:arrival', async(req, res)=>{
    try{
        const qtype = 'query';
        const {arrival} = req.params;
        console.log("arrival connected");
        await pool.query(`BEGIN TRANSACTION;`);
        const allDemos = await dbQuery(qtype, `SELECT * FROM flight WHERE arrival_airport='${arrival}';`);
        await pool.query(`COMMIT;`);
        console.table(allDemos.rows)
        res.json(allDemos.rows);
        console.log("arrival disconnected")
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

app.get('/boardingInput/:boarding_input', async(req, res)=>{
    try{
        const qtype = 'query';
        const {boarding_input} = req.params;
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

app.get('/boardingFlight/:flight', async(req, res)=>{
    try{
        const qtype = 'query';
        const {flight} = req.params;
        console.log("boardingFlight connected");
        await pool.query(`BEGIN TRANSACTION;`);
        const allDemos = await dbQuery(qtype, `SELECT * FROM boarding WHERE flight_id='${flight}';`);
        await pool.query(`COMMIT;`);
        console.table(allDemos.rows)
        res.json(allDemos.rows);
        console.log("boardingFlight disconnected")
    } catch(err){
        console.log(err.message);
    }
});

app.get('/boardingTicket/:ticket', async(req, res)=>{
    try{
        const qtype = 'query';
        const {ticket} = req.params;
        console.log("boardingTicket connected");
        await pool.query(`BEGIN TRANSACTION;`);
        const allDemos = await dbQuery(qtype, `SELECT * FROM boarding WHERE ticket_no='${ticket}';`);
        await pool.query(`COMMIT;`);
        console.table(allDemos.rows)
        res.json(allDemos.rows);
        console.log("boardingTicket disconnected")
    } catch(err){
        console.log(err.message);
    }
});

app.get('/Airplane', async(req, res)=>{
    try{
        console.log("Airplane connected");
        await pool.query(`BEGIN TRANSACTION;`);
        const allDemos = await pool.query(`SELECT * FROM airplane`);
        await pool.query(`COMMIT;`);
        console.table(allDemos.rows)
        res.json(allDemos.rows);
        console.log("Airplane disconnected")
    } catch(err){
        console.log(err.message);
    }
});

app.get('/planeCode/:planeCode', async(req, res)=>{
    try{
        const qtype = 'query';
        const {planeCode} = req.params;
        console.log("planeCode connected");
        await pool.query(`BEGIN TRANSACTION;`);
        const allDemos = await dbQuery(qtype, `SELECT * FROM airplane WHERE aircraft_code='${planeCode}';`);
        await pool.query(`COMMIT;`);
        console.table(allDemos.rows)
        res.json(allDemos.rows);
        console.log("planeCode disconnected")
    } catch(err){
        console.log(err.message);
    }
});

app.get('/model/:modelType', async(req, res)=>{
    try{
        const qtype = 'query';
        const {modelType} = req.params;
        console.log("model connected");
        await pool.query(`BEGIN TRANSACTION;`);
        const allDemos = await dbQuery(qtype, `SELECT * FROM airplane WHERE model='${modelType}';`);
        await pool.query(`COMMIT;`);
        console.table(allDemos.rows)
        res.json(allDemos.rows);
        console.log("model disconnected")
    } catch(err){
        console.log(err.message);
    }
});

//:flightID/:deptDate/:deptTime/:arrDate/:arrTime/:deptApt/:arrApt
app.put('/update', async(req, res)=>{
    try{
        const qtype = 'transaction';
        const {flightID,deptDate,deptTime,arrDate,arrTime,deptApt,arrApt} = req.body.params;
        console.log("update connected");
        await pool.query(`BEGIN TRANSACTION;`);
        const allDemos = await dbQuery(qtype, `UPDATE flight SET departure_date = '${deptDate}', departure_time = '${deptTime}', departure_airport = '${deptApt}',arrival_date = '${arrDate}', arrival_time = '${arrTime}', departure_airport = '${arrApt}'
                                                WHERE flight_id = '${flightID}'`);
        await pool.query(`COMMIT;`);
        console.table(allDemos.rows)
        res.json(allDemos.rows);
        console.log("update disconnected")
    } catch(err){
        console.log(err.message);
    }
});

// set up the server listening at port 5000 (the port number can be changed)
const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`server has started on port ${port}`);
});