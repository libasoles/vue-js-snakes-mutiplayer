const { getState, setState } = require("../state");
const config = require("../config")
const factories = require("../factories");

/**
 * Responsabilities:
 * - Manages clients (aka players)
 * - Sends them messages
 * - Accepts ther inputs
 * - Updates scene regularly
 */
class Game {
  constructor(
    io,
    sceneDimensions = config.scene.dimensions,
    createScene = factories.createScene,
    createSnake = factories.createSnake,
    createFruit = factories.createFruit
  ) {
    this.io = io;
    this.clients = {};
    this.createScene = createScene;
    this.createSnake = createSnake;
    this.createFruit = createFruit;
    this.getState = getState;
    this.setState = setState;
    this.update = this.update.bind(this);
    this.init(sceneDimensions);
  }

  init(sceneDimensions) {
    const fruit = this.createFruit();

    const scene = this.createScene({
      ...sceneDimensions,
      fruits: [fruit],
      createFruit: this.createFruit.bind(this),
      onColission: this.onColission.bind(this),
      onFruitEaten: this.onFruitEaten.bind(this),
      onNewFruit: this.onNewFruit.bind(this),
    });

    this.setState({
      scene
    });
  }

  addClient(client) {
    const { id } = client;
    this.clients[id] = client;
    const { scene } = this.getState();

    // each client has an associated snake
    const snake = this.createSnake({ id });
    this.setState({
      scene: {
        snakes: [
          ...scene.snakes,
          snake
        ]
      }
    });

    client.on('move', snake.setDirection);
    client.on('restart', () => {
      this.restart(id);
    });

    client.emit("init", {
      id,
      scene,
      refreshRate: this.getState().refreshRate
    });
  }

  restart(id) {
    const { scene } = this.getState();

    const snakes = scene.snakes.map(snake => {
      if(snake.id !== id) {
        return snake;
      }

      return this.createSnake({
        id,
        color: snake.color
      });
    })

    this.setState({
      scene: {        
        snakes 
      }
    });
  }

  removeClient(clientId) {
    const { scene } = this.getState();

    this.setState({
      scene: {
        snakes: scene.snakes.filter(snake => snake.id !== clientId)
      }
    });
  }

  onColission(snake) {
    this.clients[snake.id].emit('wall-collision');
  }

  onFruitEaten(fruitEaten) {
    this.io.emit('fruit-eaten', fruitEaten);
  }

  onNewFruit(newFruit) {
    this.io.emit('new-fruit', newFruit);
  }

  update() {
    const { scene } = this.getState();
    
    scene.update();
    this.io.emit("snakes-positions", {
      snakes: scene.snakes
    });
  }
}

module.exports = Game;