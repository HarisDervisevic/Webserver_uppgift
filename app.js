const express = require('express')
const dBModule = require('./dBModule')
const personModel = require('./PersonModel')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(clientDir))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
}) 