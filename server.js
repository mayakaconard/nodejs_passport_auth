const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database.config');
// Require express layout
const expressLayouts = require('express-ejs-layouts');
// create express app
const app = express();
// require EJS middleware
app.use(expressLayouts);
app.set('view engine', 'ejs');


// db.connect();
// db.query('select * from users', (error, result) => {
//     console.log('connected!!');
//     console.log(result);
// });


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 3000;

//takes a call back
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));