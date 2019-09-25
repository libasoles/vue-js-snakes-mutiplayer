const Express = require("express")();
const Http = require("http").Server(Express);
const connect = require("./src/app");

connect(Http);

Http.listen(3000, () => {
  console.log("Listening at :3000...");
});