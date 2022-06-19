const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const hbs = require('express-handlebars');

const route = require('./routes');
const db = require('./config/db');
//Connect to DB
db.connect();

const { extname } = require('path');
const app = express();
const port = 3000;



app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(methodOverride('_method'));

// XMLHttpRequest, fetch, axios

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine('hbs', hbs.engine({
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a + b,
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources','views'));

//routes init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});