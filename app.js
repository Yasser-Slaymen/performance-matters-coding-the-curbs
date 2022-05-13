const express = require('express')
const app = express()
const PORT = 2000;
const bodyParser = require('body-parser')


// static files
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

// ejs template engine
app.set('view engine', 'ejs')
app.set('views', './views')
// Routes
const homeRoute = require('./routes/home')
const addRoute = require('./routes/add')
const deleteRoute = require('./routes/delete')
const editRoute = require('./routes/edit')
app.use('/',homeRoute)
app.use('/',addRoute)
app.use('/',deleteRoute)
app.use('/',editRoute)

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
  });
