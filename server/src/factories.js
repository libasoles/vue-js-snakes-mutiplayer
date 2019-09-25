const config = require("./config");
const Scene = require("./entities/scene");
const Snake = require("./entities/snake");
const Fruit = require("./entities/fruit");
const Position = require("./entities/position");

const createSnake = (args) => {
  const { blockSize, snake } = config;
  const { dimensions } = config.scene;

  return new Snake({
    size: blockSize,
    position: Position.getRandom(
      dimensions.width - blockSize, 
      dimensions.heigth - blockSize
    ),
    speed: snake.speed,
    color: config.colors[(Math.floor(Math.random() * 4))],
    ...args
  })
};

const createFruit = (params) => {
  const { dimensions } = config.scene;

  return new Fruit({
    id: +new Date(),
    size: config.fruit.size,
    position: Position.getRandom(
      dimensions.width - config.blockSize,
      dimensions.heigth - config.blockSize
    ),
    ...params
  });
}

module.exports = {
  createScene: (...args) => new Scene(...args, createFruit),
  createSnake,
  createFruit
}