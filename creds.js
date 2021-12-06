const { Pool } = require('pg');

const pool = new Pool({
    host: "3380db.cs.uh.edu",
    user: "dbs055",
    password: "1647989K",
    port: "5432",
    database: "COSC3380"
})

module.exports = pool;