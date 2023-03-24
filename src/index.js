require('dotenv').config()

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors');
const morgan = require('morgan');
const { errorMiddleware } = require('./middleware/errorMiddleware');
const ViteExpress = require("vite-express");

const authentication = require('./routers/authentication')
const users = require('./routers/users')

const HOST = process.env.HOST_SERVER;
const PORT = process.env.PORT || 4034;


const app = express()
ViteExpress.config({ mode: process.env.NODE_ENV })

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(errorMiddleware)

app.use('/', express.static(path.join(__dirname, '../dist')))
app.use('/auth', authentication)
app.use('/user', users)


if (process.env.NODE_ENV !== 'production') {
  ViteExpress.listen(app, PORT, () => {
    console.log(`⭐️ listening on http://${HOST}:${PORT}`)
  })

} else {

  ViteExpress.listen(app, PORT, () => {
    console.log(`⭐️ listening on http://${HOST}:${PORT}`)
  })
}

