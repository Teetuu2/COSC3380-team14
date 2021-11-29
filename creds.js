const { Pool } = require('pg');
var pg = require('pg');

const conString = "postgres://onkwqgmw:a6PHKnm_J7dhj58jKcXvyc06cKR3seMF@kashin.db.elephantsql.com/onkwqgmw"
const pool = new pg.Client(conString);
module.exports = pool;