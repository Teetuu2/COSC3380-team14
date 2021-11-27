//run npm run start

const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./creds');

// static file
app.use(express.static('public'));

// middleware
app.use(cors());
app.use(express.json());      //req.body
//app.use(express.urlencoded({ extended : false}))

//ROUTES
//app.get('/', (req,res) => res.render('index'))
//get all flights
app.get("/flight", async (req,res) => {
  try {
    const allFlights = await pool.query("SELECT * FROM flight")

    res.json(allFlights.rows)
  } catch(err){
    console.error(err.message)
  }
})
//get a flight
app.get("/flight/:id", async (req,res) => {
  try {
    const { id } = req.params
    const flightInfo = await pool.query(
      "SELECT * FROM flight WHERE flight_id = $1",
      [id]
      )

    res.json(flightInfo.rows[0])
  } catch(err){
    console.error(err.message)
  }
})

//create a flight
app.post("/flight", async (req,res) => {
  try {
    const { 
      flight_id,
      departure_date,
      departure_time,
      arrival_date,
      arrival_time,
      departure_airport,
      arrival_airport 
    }= req.body
    const newFlight = await pool.query(
      "INSERT INTO flight VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *",
      [flight_id,
        departure_date,
        departure_time,
        arrival_date,
        arrival_time,
        departure_airport,
        arrival_airport]
    )
    
    res.json(newFlight.rows[0])
  } catch(err){
    console.error(err.message)
  }
})

//update a flight
app.put("/flight/:flight_id", async (req,res) => {
  try {
    const { flight_id } = req.params
    const {
      departure_date,
      departure_time,
      arrival_date,
      arrival_time,
      departure_airport,
      arrival_airport 
    } = req.body
    const updateFlight = await pool.query(
      "UPDATE flight \
      SET departure_date = $1, \
      departure_time = $2, \
      arrival_date = $3, \
      arrival_time = $4, \
      departure_airport = $5, \
      arrival_airport = $6 \
      WHERE flight_id = $7",
      [departure_date,
        departure_time,
        arrival_date,
        arrival_time,
        departure_airport,
        arrival_airport,
        flight_id]
    )

    res.json("Flight was updated")
  } catch(err){
    console.error(err.message)
  }
})

//delete a flight
app.delete("/flight/:flight_id", async (req,res) => {
  try {
    const {flight_id} = req.params
    const deleteFlight = await pool.query("DELETE FROM flight WHERE flight_id=$1",
    [flight_id])
    res.json("Flight was deleled")
  } catch (err){
    console.log(err.message)
  }
})

// set up the server listening at port 3000
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
  console.log(`Server has started on port ${port}`);
});