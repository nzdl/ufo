import 'reflect-metadata'
import { createServer } from './createServer'

process.on('uncaughtException', error => {
  console.log(`UncaughtException: ${error}`)
})

const app = createServer()

const port = process.env.PORT || 3000
app.listen(port, error => console.log(error || `Listening on ${port}...`))
