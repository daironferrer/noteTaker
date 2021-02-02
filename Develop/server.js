const express = require('express');
const apiRoute = require('./routes/api');
const htmlRoute = require('./routes/rendered');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use('/api', apiRoute);
app.use('/', htmlRoute);

// Begins app
app.listen(PORT, function () {
    console.log('Listening on PORT:' + PORT);
});