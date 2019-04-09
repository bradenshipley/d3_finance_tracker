const express = require('express')
const { json } = require('body-parser')
const PORT = 3001
const { login, register } = require('./controller')
const app = express()
app.use(json())

//controller endpoints
app.post('/login', login)
app.post('/register', register)

app.listen(PORT, () => { console.log(`App is listening on ${PORT}`) })
