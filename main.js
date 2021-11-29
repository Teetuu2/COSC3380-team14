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
        const allDemos = await pool.query(`SELECT * FROM flight`);
        console.table(allDemos.rows)
        res.json(allDemos.rows);
        console.log("flights disconnected")
    } catch(err){
        console.log(err.message);
    }
});

app.get('/boarding', async(req, res)=>{
    try{
        console.log("boarding connected");
        const allDemos = await pool.query(`SELECT * FROM boarding`);
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