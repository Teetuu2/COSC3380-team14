//cmd line: npm run start

const express = require('express');
const app = express();
const cors = require('cors');
const { engine } = require('express-handlebars')
const pool = require('./creds');

// handlebars middleware
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');

// body parser middleware
app.use(cors());
app.use(express.json());      //req.body
app.use(express.urlencoded({ extended : false}))

// Set static folder
app.use(express.static('public'));

//ROUTES
app.get('/', (req,res) => res.render('index.html'))

app.use('/flight', require('./server/routes/flight'))


// set up the server listening at port 3000
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
  console.log(`Server has started on port ${port}`);
});