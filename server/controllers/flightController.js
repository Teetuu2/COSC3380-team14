const pool = require('../../creds')

exports.view = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM flight")
    const allFlights = result.rows
    res.render('flight', { allFlights })
    //res.json(allFlights.rows)
  } catch (err) {
    console.err(err)
  }
}

/*
exports.insert = async (req, res) => {
  const {
    flight_id,
    departure_date,
    departure_time,
    arrival_date,
    arrival_time,
    departure_airport,
    arrival_airport
  } = req.body
  const newFlight = await pool.query(
    "INSERT INTO flight VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *",
    [flight_id,
      departure_date,
      departure_time,
      arrival_date,
      arrival_time,
      departure_airport,
      arrival_airport], (err, res) => {
        if (!err){
          res.render('flight', { rows })
        } else {
          console.log(err)
        }
      }
  )
  //res.json(newFlight.rows[0])
}*/