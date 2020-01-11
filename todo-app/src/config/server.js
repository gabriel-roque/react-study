const PORT = 3003;

const bodyParser = require("body-parser");
const express = require("express");
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(PORT, function() {
  console.log(`API is running on port ${PORT}`);
});
