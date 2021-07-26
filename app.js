// app.js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res, next) => {
  console.log(`${formatDate()} | ${req.method} from ${req.originalUrl}`)
  res.send('列出全部 Todo')
})

app.get('/new', (req, res, next) => {
  console.log(`${formatDate()} | ${req.method} from ${req.originalUrl}`)
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res, next) => {
  console.log(`${formatDate()} | ${req.method} from ${req.originalUrl}`)
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res, next) => {
  console.log(`${formatDate()} | ${req.method} from ${req.originalUrl}`)
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})

function formatDate(req, res, next) {
  const d = new Date
  let result =""
  result += d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate() +
    " " + d.getHours() + ":" + d.getMinutes() + ":" +
    d.getSeconds()
  return result;
}