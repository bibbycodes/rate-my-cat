require('dotenv').config();
const express = require('express')
const PORT = process.env.HTTP_PORT || 5000;
const app = express()
const cors = require('cors');
const path = require('path')
const axios = require('axios')

app.use(cors())
// app.use(express.static(path.join(__dirname, 'client', 'build')))

app.get('/home', (req, res) => {
  res.json({message : 'Express Template'})
})

app.get('/cats', (req, res) => {
  res.json(process.env.API_KEY)
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`)
})

module.exports = app