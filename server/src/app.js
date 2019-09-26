const socketio = require("socket.io");

const config = require("./config");
const { loop } = require("./helpers");
const Game = require("./entities/game");

let game;

/**
 * Game created
 */
function initGameSocket(Http) {
  const io = socketio(Http);
  io.on("connection", onConnect);

  game = new Game(io);
  loop(game.update, config.refreshRate);
}

/**
 * New Client connects
 */
const onConnect = (client) => {
  console.log('user connected', client.id);
  client.on('disconnect', () => disconnect(client));

  game.addClient(client);
}

/**
 * Client disconnects
 */
const disconnect = (client) => {
  game.removeClient(client.id);
  console.log('user disconnected', client.id);
}

module.exports = initGameSocket;
