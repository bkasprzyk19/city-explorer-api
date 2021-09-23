'use strict';


require('dotenv').config();
const express = require('express');

const cors = require('cors');
const axios = require('axios');



const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());


app.get('/', (request, response) => {
  response.status(200).send('Authenticated, Grade A Prime');
});

function Forecast(day) {
  this.day = day.valid_date;
  this.description = day.weather.description;
}

app.get('/weather', async (request, response) => {

  
  const city_name = request.query.city_name;
  const lat = request.query.lat;
  const lon = request.query.lon;

  const weatherAPI = `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.REACT_APP_WEATHER_API_KEY}&land=en&lat=${lat}&lon=${lon}&days=5`







  if (firstClimate) {
    const weatherArr = currentForecast.data.map(item => new Forecast(item));
    response.send(weatherArr);
  } else {
    response.status(555).send('submit a valid city name')
  }
 

});


app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));