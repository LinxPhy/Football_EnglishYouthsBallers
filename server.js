const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello")
})


app.listen(3001, () => {
    console.log("Server Started")
})