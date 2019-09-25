const express = require("express");
const app = express();
const http = require("http").Server(app);
const connect = require("./src/app");
const path = require('path'); 

connect(http);

app.use('/public', express.static(__dirname + '/public'));// Routing
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, '/public/index.html'));
});

http.listen(3000, () => {
  console.log("Listening at :3000...");
});