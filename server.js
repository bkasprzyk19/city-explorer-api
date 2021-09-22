'use strict';


require('dotenv').config();

const express = require('express');
const cors = require('cors');
const climates = require('./data/weather.json');


const PORT = process.env.PORT || 3001;

const app = express();

// middleware
app.use(cors());


app.get('/', (request, response) => {
  response.status(200).send('I am home at last!');
});

app.get('/climates', (request, response) => {

  const data = request.query.data === "true";

  const firstClimate = climates.find(climate => climate.searchQuery === data);

  response.send(firstClimate);

})


app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));