const path = require('path')
const http = require('http')
const express = require('express')
const hbs = require('express-handlebars')
const router = require('./routes/index.js')

const app = express()

app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, './', 'views'))
app.set('view engine', 'hbs')

app.use(router)
app.use(express.static(path.join(__dirname, './', 'public')))

app.engine('hbs', hbs({
  defaultLayout: 'main',
  layoutDir: path.join(__dirname, './', 'views/layouts'),
  partialsDir: path.join(__dirname, './', '/views/partials'),
  extname: 'hbs'
}))

http.createServer(app).listen(app.get('port'), function () {
  console.log('Server listening on port ', app.get('port'))
})

module.exports = app
