const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const favicon = require('serve-favicon')
const cors = require('cors')
const port = process.env.PORT || 3000
const app = express()
const Drift = require('drift-chat')

app.use(cors())
app.use(favicon(path.join(__dirname, 'static', 'favicon.ico')))
app.use(bodyParser.json())

app.get('/', async (request, response) => {
  return response.status(200).send('check it')
})

app.post('/', (req, res) => {
  console.log(req.body)
  if (!res.ok) return res.send(400)
})

app
  .listen(port, () => {
    console.log('Your bot is listening')
  })
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })

// function formatError(err) {
//   return {
//     code: err.code,
//     message: err.message,
//     stack: err.stack,
//   }
// }
