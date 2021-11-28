const express = require('express')
const router = express.Router()
const flightController = require('../controllers/flightController')

//Routes
router.get('/', flightController.view);
/*
router.get('/flight', (req,res) => res.render('flight'))
// create, read, update, delete
//get all flights
router.get("/", async (req,res) => {
  try {
    const allFlights = await pool.query("SELECT * FROM flight")

    res.json(allFlights.rows)
  } catch(err){
    console.error(err.message)
  }
})
//get a flight
router.get("/:id", async (req,res) => {
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
router.post("/", async (req,res) => {
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
router.put("/:flight_id", async (req,res) => {
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
router.delete("/:flight_id", async (req,res) => {
  try {
    const {flight_id} = req.params
    const deleteFlight = await pool.query("DELETE FROM flight WHERE flight_id=$1",
    [flight_id])
    res.json("Flight was deleled")
  } catch (err){
    console.log(err.message)
  }
})
*/
//export module
module.exports = router