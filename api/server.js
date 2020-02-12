const express = require('express');
const cors = require("cors");

const hubsRouter = require('../hubs/hubs-router.js');

const server = express();

server.use(express.json());

server.use(cors())

server.use('/api/posts', hubsRouter);

module.exports = server;