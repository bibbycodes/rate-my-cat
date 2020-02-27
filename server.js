require('dotenv').config();
const express = require('express')
const PORT = process.env.PORT || 5000;
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');
const path = require('path')
const axios = require('axios')
const DbConn = require('./models/DbConn')
const Rating = require('./models/Rating')

const API_KEY = process.env.API_KEY
const base_url = "https://api.thecatapi.com/v1"

app.use(cors())
app.use(bodyParser.json())

if (process.env.NODE_ENV == 'development') {
  app.use('/', express.static(path.join(__dirname, 'client/public')))
} else if (process.env.NODE_ENV == 'production') {
  app.use('/', express.static(path.join(__dirname, 'client/build')))
}

app.get('/', (req, res) => {
  try {
    if (process.env.NODE_ENV == 'development') {
      res.sendFile(path.join(__dirname+'/client/public/index.html'))
    } else if (process.env.NODE_ENV == 'production') {
      res.sendFile(path.join(__dirname+'/client/build/index.html'))
    }
  } catch (err) {
    console.log(err)
  }
})

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
  db = new DbConn()
  result = await Rating.all()
  res.json(result)
})

app.post('/ratings/new', async (req, res) => {
  rating = new Rating(req.body.url, req.body.rating)
  result = await rating.add()
  res.status(200).json(result)
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`)
})


module.exports = app