class Fruit {
  constructor({ id, position, size, color = 'red' }) {
    this.id = id;
    this.position = position;
    this.size = size;
    this.color = color;
  }
}

module.exports = Fruit;