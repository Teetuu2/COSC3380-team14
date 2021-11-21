const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//Create
app.post('/insert', (request, resposne) => {

});

//Read
app.get('/getAll', (request, response) => {
    console.log('Reading Request');
});

//Connecting
app.listen(process.env.PORT, () => console.log('Successfully reached app.js'));