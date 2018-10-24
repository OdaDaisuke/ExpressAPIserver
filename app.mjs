import express from 'express'
import cluster from 'express-cluster'
import bodyParser from 'body-parser'
import configs from './configs'
import router from './routes'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(configs.API_BASE, router)

cluster((worker) => {
  app.listen(configs.PORT, () => {
    console.log(`port: ${configs.PORT}. pid: ${process.pid}. wid: ${worker.id}`)
  })
})
