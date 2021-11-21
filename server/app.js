const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.post('/insert', (request, resposne) => {

});

app.get('/getAll', (request, response) => {
    console.log('Reading Request');
});

app.listen(process.env.PORT, () => console.log('Successfully reached app.js'))