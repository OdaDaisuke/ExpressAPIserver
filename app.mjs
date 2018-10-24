import express from 'express'
import cluster from 'express-cluster'
import bodyParser from 'body-parser'
import config from 'config'
import router from './routes'

const app = express()
const port = process.env.PORT || config.app.port

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(config.app.apiBase, router)

cluster((worker) => {
  app.listen(port, () => {
    console.log(`port: ${port}. pid: ${process.pid}. wid: ${worker.id}`)
  })
})
