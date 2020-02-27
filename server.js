require('dotenv').config();
const express = require('express')
const PORT = process.env.HTTP_PORT || 5000;
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');
const path = require('path')
const axios = require('axios')
const DbConn = require('./models/DbConn')

const API_KEY = process.env.API_KEY
const base_url = "https://api.thecatapi.com/v1"
const options = {
  headers: {"x-api-key" : API_KEY}
}

app.use(cors())
app.use(bodyParser.json())
// app.use(express.static(path.join(__dirname, 'client', 'build')))

app.get('/home', (req, res) => {
  res.json({message : 'Express Template'})
})

app.get('/cats', async (req, res) => {
  let result = await axios.get(`${base_url}/images/search?api_key=${API_KEY}&size=full&limit=50`)
  res.json(result.data)
})

app.get('/cats/random', async (req, res) => {
  let result = await axios.get(`${base_url}/images/search?api_key=${API_KEY}&size=full&limit=1`)
  res.json(result.data)
})

app.get('/ratings/all', async (req, res) => {
  results = await DbConn.query('SELECT * FROM RATINGS')
})

app.post('/ratings/new', async (req, res) => {
  console.log("rating")
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`)
})


module.exports = app