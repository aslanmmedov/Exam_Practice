const express = require('express')
const mongoose = require('mongoose');
const RouterModel = require('./routes/wineRoute')
var cors = require('cors')
const app = express()
require('dotenv').config()


app.use(express.json());
app.use(cors())
const PORT = process.env.PORT || 8080;
const DB_URL = process.env.DB_URL;


app.use('/',RouterModel )


mongoose.connect(DB_URL)
  .then(() => {
    app.listen(PORT, () => {
        console.log(`Example app listening at http://localhost:${PORT}`)
      })
      console.log('Connected!')});
