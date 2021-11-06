const express = require('express')
const multer = require('multer')
const cors = require('cors')
const app = express()
const mysql = require('mysql')
//another
const fs = require('fs')
const path = require('path')
//連database
const db = mysql.createPool({
  host: 'localhost',
  user: 'Micheal',
  password: 'admin',
  database: 'pet-project',
})
//cors
const corsOptions = {
  credentials: true,
  origin: (origin, cb) => {
    console.log(`origin: ${origin}`)
    cb(null, true)
  },
}

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//get petlist
app.get('/api/getpetlist', (req, res) => {
  const sql = 'SELECT * FROM petlist '
  db.query(sql, (err, result) => {
    res.send(result)
    console.log(err)
  })
})
//get hotel list
app.get('/api/gethotellist', (req, res) => {
  const sql = 'SELECT * FROM hotellist '
  db.query(sql, (err, result) => {
    res.send(result)
    console.log(err)
  })
})
// app.get('/adoptlist/adoptpage/:id', async (req, res) => {
//   const sql = 'SELECT * FROM `petlist` WHERE sid=?'
//   db.query(sql, (err, result) => {
//     res.send(result)
//     console.log(err)
//   })
// })

app.listen(3002, () => {
  console.log('running on port 3002')
})
