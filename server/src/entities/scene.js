const Position = require("./position");

class Scene {
  constructor({
    width,
    heigth,
    snakes = [],
    fruits = [],
    createFruit,
    onCollision,
    onFruitEaten,
    onNewFruit,
  }) {
    this.dimensions = { width, heigth };
    this.snakes = snakes;
    this.fruits = fruits;
    this.createFruit = createFruit;
    this.onCollision = onCollision;
    this.onFruitEaten = onFruitEaten;
    this.onNewFruit = onNewFruit;
  }

  update() {
    for (const snake of this.snakes) {
      snake.move();

      const collides = this.checkCollision(snake);
      if (collides && !snake.isDead) {
        this.onCollision(snake);
        snake.die();
      }

      const fruitEaten = this.checkFruitEaten(snake);
      if (fruitEaten) {
        this.onFruitEaten(fruitEaten);
        snake.grow();

        const newFruit = this.removeFruit(fruitEaten).addRandomFruit();
        this.onNewFruit(newFruit);
      }
    }
  }

  checkCollision(snake) {
    const { width, heigth } = this.dimensions;
    const { position } = snake.head;

    if (position.x < 0 || position.x >= width ||
      position.y < 0 || position.y >= heigth) {

      return true;
    }

    return false;
  }

  checkFruitEaten(snake) {
    const snakePosition = snake.head.position;

    for (const fruit of this.fruits) {
      const fruitWasEaten = Position.compare(snakePosition, fruit.position)
      if (fruitWasEaten) {

        return fruit;
      }
    }

    return false;
  }

  addRandomFruit() {
    const fruit = this.createFruit();
    this.fruits.push(fruit);

    return fruit;
  }

  removeFruit(fruitEaten) {
    this.fruits = this.fruits.filter(({ id }) => id !== fruitEaten.id);

    return this;
  }
}

module.exports = Scene;
