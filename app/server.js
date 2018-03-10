const express = require('express');
const fetch = require('node-fetch');
const config = require('../config.js');

const yelpRoutes = require('./controllers/yelpRoutes.js');

const server = express();
const PORT = config.port;

server.use(yelpRoutes);

server.listen(PORT, () => {
  console.log(`We are live on ${PORT}`);
});
