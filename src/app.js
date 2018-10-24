const express = require('express');
const bodyParser = require('body-parser');
const configs = require('./configs');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = require('./routes/v1/');
app.use(configs.API_BASE, router);

for(let i = 0; i < router.stack.length; ++i) {
  const routerReg = router.stack[i].regexp;
  console.log(routerReg);
}

app.listen(configs.PORT);
console.log(`\n http://localhost: ${configs.PORT}${configs.API_BASE}`);
