require('dotenv').config()
const PORT = process.env.PORT || 3000
const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
    .use(cors())
    .listen(PORT, () => {
        console.log('Respondendo na Porta ' + PORT)
    })