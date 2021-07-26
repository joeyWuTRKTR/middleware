// app.js
const express = require('express')
const app = express()
const port = 3000

let start = new Date()

app.get('/', (req, res, next) => {
  let end = new Date()
  console.log(`${formatDate()} | ${req.method} from ${req.originalUrl} | totalTime:`, end - start, 'ms' )
  res.send('列出全部 Todo')
})

app.get('/new', (req, res, next) => {
  let end = new Date()
  console.log(`${formatDate()} | ${req.method} from ${req.originalUrl} | totalTime:`, end - start, 'ms')
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res, next) => {
  let end = new Date()
  console.log(`${formatDate()} | ${req.method} from ${req.originalUrl} | totalTime:`, end - start, 'ms')
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res, next) => {
  let end = new Date()
  console.log(`${formatDate()} | ${req.method} from ${req.originalUrl} | totalTime:`, end - start, 'ms')
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})

function formatDate() {
  const d = new Date
  let result =""
  result += d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate() +
    " " + d.getHours() + ":" + d.getMinutes() + ":" +
    d.getSeconds()
  return result;
}