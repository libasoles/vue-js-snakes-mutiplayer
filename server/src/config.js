const blockSize = 10;

module.exports = {
  colors: [
    '#fb71ff', 
    '#4a37ff', 
    '#ffcb4f', 
    '#914bff', 
    '#37fff6',
    '#ccff4f',
    '#4fff95',
    '#4fffe7',
    '#934fff',
    '#3f9dca',
    '#7cb530',
    '#5b940e',
    '#5b8096',
    '#af6899',
  ],
  blockSize: 10,
  fruit: {
    color: "red",
    size: blockSize
  },
  scene: {
    dimensions: {
      width: 800,
      heigth: 450
    }
  },
  snake: {
    speed: 10
  },
  refreshRate: 1000 / 14
}