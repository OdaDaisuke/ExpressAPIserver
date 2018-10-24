import express from 'express'
import bodyParser from 'body-parser'
import configs from './configs'
import router from './routes/v1'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(configs.API_BASE, router)

for(let i = 0; i < router.stack.length; ++i) {
  const routerReg = router.stack[i].regexp
  console.log(routerReg)
}

app.listen(configs.PORT)
console.log(`\n http://localhost: ${configs.PORT}${configs.API_BASE}`)
