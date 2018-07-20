const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const cors = require('cors')
const { PORT, APIKEY } = process.env
const app = express()
// const Drift = require('drift-chat')

app.use(cors())
app.use(favicon(path.join(__dirname, 'static', 'favicon.ico')))
app.use(bodyParser.json())

app.get('/', async (request, response) => {
  return response.status(200).send('check it')
})

app.post('/', (req, res) => {
  if (!res) return res.sendStatus(400)
  res.sendStatus(200)
})

app.listen(PORT, () => {
  console.log('Your bot is listening')
})
