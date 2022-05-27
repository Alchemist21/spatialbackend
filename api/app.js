const express = require('express')
const app = express()
const axios = require('axios')

const key = process.env.weatherApiKey

app.get('/', async (req, res) => {
  const { longtitude, latitude } = req.query
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtitude}&appid=${key}`
  const result = await axios.get(url) 
  const weatherCondition = result.data.weather[0].main
  const weather = weatherCondition.toLowerCase()
  if(weather.includes('cloud')) {
    res.send("0")
  } else if(weather.includes('rain')) {
    res.send("1")
  } else if(weather.includes('snow')) {
    res.send("2")
  } else if(weather.includes('windy')) {
    res.send("3")
  }  else if(weather.includes('clear')) {
    res.send("4")
  }
  res.send("-1")
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})