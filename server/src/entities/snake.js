
const directions = require("../enums/directions");
const Position = require("./position");
const config = require("../config");

class Snake {
  constructor({
    id,
    position = new Position(),
    tail = [],
    size = 0,
    speed = config.snake.speed,
    color,
  }) {
    this.id = id;
    this.isDead = false;
    this.head = { size, position };
    this.tail = tail;
    this.speed = speed;
    this.color = color;
    this.direction = new Position();
    this.setDirection = this.setDirection.bind(this);
  }

  move() {
    const { head, tail } = this;

    // move head
    let previousPosition = { ...head.position };
    this.head.position = Position.add(
      this.head.position,
      this.direction
    );

    // move tail
    let newTail = [];
    for (let chunk in tail) {
      const newPosition = Position.clone(previousPosition);
      previousPosition = tail[chunk];
      newTail.push(newPosition);
    }
    this.tail = newTail;
  }

  setDirection({ direction }) {
    const speed = this.speed;
    const delta = new Position();

    if (direction === directions.up) {
      delta.y -= speed;
    }
    else if (direction === directions.down) {
      delta.y += speed;
    }
    else if (direction === directions.left) {
      delta.x -= speed;
    }
    else if (direction === directions.right) {
      delta.x += speed;
    }

    this.direction = delta;
  }

  grow() {
    const head = this.head;

    const tailChunk = new Position(
      head.position.x,
      head.position.y
    );
    this.tail.push(tailChunk);
  }

  die() {
    this.isDead = true;
    this.speed = 0;
    this.direction = new Position();
  }
}

module.exports = Snake;
