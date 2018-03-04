const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// setting of body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// http://localhost:3000/api/v1/
const API_BASE = '/api/v1/';
var router = require('./routes/v1/');
app.use(API_BASE, router);

console.log('\n---Routings---');
for(var i = 0; i < router.stack.length; ++i) {
  const routerReg = router.stack[i].regexp;
  console.log(routerReg);
}

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log('\nAPI server is listening at url -> http://localhost:' + PORT + API_BASE);
