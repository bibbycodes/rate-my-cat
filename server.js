require('dotenv').config();
const express = require('express')
const PORT = process.env.HTTP_PORT || 5000;
const app = express()
const cors = require('cors');
const path = require('path')
const axios = require('axios')

const API_KEY = process.env.API_KEY
const base_url = "https://api.thecatapi.com/v1"
const options = {
  headers: {"x-api-key" : API_KEY}
}

app.use(cors())
// app.use(express.static(path.join(__dirname, 'client', 'build')))

app.get('/home', (req, res) => {
  res.json({message : 'Express Template'})
})

app.get('/cats', async (req, res) => {
  let result = await axios.get(`${base_url}/images/search?api_key=${API_KEY}&size=full&limit=50`)
  res.send(result.data)
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`)
})

module.exports = app