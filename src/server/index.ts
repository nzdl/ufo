import express from 'express'
import Bundler from 'parcel-bundler'
import path from 'path'

process.on('uncaughtException', error => {
  console.log(`UncaughtException: ${error}`)
})

const app = express()

app.get('/hi', (req, res) => {
  res.send('hi typescript')
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../public')))
}

if (process.env.NODE_ENV === 'development') {
  const bundler = new Bundler(path.join(__dirname, '../client/index.html'))
  app.use(bundler.middleware())
}

const port = process.env.PORT || 3000
app.listen(port, error => console.log(error || `Listening on ${port}...`))