const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Drift = require('drift-chat')

app.use(bodyParser.json())
app.listen(process.env.PORT || 3000, () => console.log('Your bot is listening'))

app.get('/', async (request, response) => {
  return response.status(200).send('check it')
})

app.post('/', (req, res) => {
  console.log(req.body)
  if (!data) return res.send(400)
})

//  ./ngrok http 3000
// Q8KmS0RdE8ITvAHAMEb384FQOxukjU2n
