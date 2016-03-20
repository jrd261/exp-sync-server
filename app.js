'use strict';


const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plan');
  res.set('Access-Control-Allow-Origin', '*');
  res.send(Date.now().toString());
});

app.listen(4001);