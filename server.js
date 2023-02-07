const express = require('express')
const path = require('path')
const axios = require('axios')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.sendFile("source.html", { root: path.join(__dirname) })
})

app.get('/api', async(req, res) => {
  console.log(req._parsedUrl.query)
  let url = "https://newsapi.org/v2/everything?"+req._parsedUrl.query
  let r = await axios(url)
  let a = r.data
  res.json(a)

})

// app.get('/api', (req, res) => {
//   let r = await axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=87307722338b46d99a819cf610ad186d")
//   res.json(r)
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})