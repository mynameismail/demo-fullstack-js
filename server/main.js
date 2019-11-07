var cors = require('cors')
var bodyParser = require('body-parser')
var express = require('express')
var helmet = require('helmet')
var http = require('http')
var path = require('path')

var app = express()
app.use(cors({
  credentials: true,
  origin: ['http://localhost:8080']
}))
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, './static')))

var users = [
  {
    name: 'Ismail',
    age: '24',
    department: 'IT Commercial Platform'
  },
  {
    name: 'M. Amirlulah Syaputra',
    age: '28',
    department: 'IT Commercial Platform'
  }
]

var middleware = (req, res, next) => {
  if (req.headers.tokennya == 'abcxyz') {
    next()
  }
  else {
    res.status(400).send({
      status: 'NOK',
      message: 'Tokennya invalid'
    })
  }
}

var hello = (req, res) => {
  res.status(200).send({
    status: 'OK',
    data: users
  })
}

var add = (req, res) => {
  console.log(req.body)
  users.push({
    name: req.body.name,
    age: req.body.age,
    department: req.body.department,
  })
  res.status(200).send({
    status: 'OK',
    message: 'Success add user'
  })
}

app.get('/api/users', middleware, hello)
app.post('/api/users', middleware, add)

app.get('*', (req, res) => res.sendStatus(404))

var port = 3000
var server = http.createServer(app)
server.listen(port, () => console.log(`Listening on port ${port}`))
