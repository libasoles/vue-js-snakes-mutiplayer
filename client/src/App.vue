<template>
  <div id="app">
    <div class="vertical-container">
      <div class="row" :style="{width: scene.dimensions.width+'px'}">
        <div class="message">{{message}}</div>
        <img src="/public/logo.png" alt="logo" class="logo" />
      </div>

      <Scene
        ref="scene"
        v-bind:dimensions="scene.dimensions"
        v-bind:snakes="scene.snakes"
        v-bind:fruits="scene.fruits"
      ></Scene>

      <button class="button" v-on:click="start" v-if="status === statuses.ready">Start</button>
      <button class="button" v-on:click="restart" v-if="status === statuses.gameOver">Restart</button>

      <keyboard v-on:arrow-pressed="setSnakeDirection"></keyboard>

      <div class="message whoami" v-if="self" :style="{width: scene.dimensions.width+'px'}">
        <span class="color" :style="{background: self.color}"></span> you
      </div>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";

import Scene from "./components/Scene.vue";
import Keyboard from "./components/Keyboard";

const statuses = {
  ready: "ready",
  running: "running",
  gameOver: "game-over"
};

const messages = {
  go: 'Go!',
  eat: ['Yum!', 'Delicious!', 'That was a nice one!', 'Ñam!', 'I\'d like some more!', 'Tasty!'],
  collision: 'Oh no!'
};

const initialState = {
  message: "",
  id: undefined,
  scene: {
    dimensions: { width: 0, height: 0 },
    snakes: [],
    fruits: []
  },
  status: statuses.ready
};

export default {
  name: "app",
  created() {
    this.statuses = statuses;
    const isDevEnvironment = process.env.NODE_ENV !== 'production';
    this.socket = io(isDevEnvironment ? `http://localhost:3000` : '/');
  },
  mounted: function() {
    this.socket.on("init", this.init);
    this.socket.on("snakes-positions", this.update);
    this.socket.on("fruit-eaten", fruit => this.fruitEaten(fruit));
    this.socket.on("new-fruit", fruit => this.addFruit(fruit));
    this.socket.on("wall-collision", () => this.endGame(messages.collision));
  },
  data: () => ({ ...initialState }),
  computed: {
    self() {
      return this.scene.snakes.find(({ id }) => id === this.id);
    }
  },
  methods: {
    init(data) {
      this.id = data.id;
      this.scene = {
        dimensions: data.scene.dimensions,
        snakes: data.scene.snakes,
        fruits: data.scene.fruits
      };
    },
    start() {
      this.status = statuses.running;
      this.displayTemporalMessage(messages.go);
    },
    update({ snakes }) {
      this.scene.snakes = snakes;
    },
    fruitEaten(eatenFruit) {
      this.scene.fruits = this.scene.fruits.filter(f => f.id !== eatenFruit.id);
      const message = messages.eat[Math.round(Math.random() * messages.eat.length)];
      this.displayTemporalMessage(message);
    },
    addFruit(fruit) {
      this.scene.fruits.push(fruit);
    },
    setSnakeDirection(direction) {
      if (this.status === statuses.ready) {
        this.start();
      }

      if (this.status === statuses.gameOver)
        return;

      this.socket.emit("move", { direction });
    },
    displayTemporalMessage(message) {
      this.message = message;

      // clear up message if no other message was displayed after
      setTimeout(() => {
        if (this.message === message) {
          this.message = "";
        }
      }, 2000);
    },
    endGame(message = "") {
      this.message = message;
      this.status = statuses.gameOver;
    },
    restart() {
      this.socket.emit("restart");
      this.displayTemporalMessage("Go!");
      this.status = statuses.running;
    }
  },
  components: {
    Scene,
    Keyboard
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat|Raleway&display=swap');

* {
  font-family: 'Montserrat', sans-serif;
  color: white;
  background: #718eff;
}

.vertical-container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.row {
  display: flex;
  justify-content: space-between;
  margin: auto auto;
}

.logo {
  height: 30px;
}

.message {
  font-family: 'Raleway', sans-serif;
  color: white;
  font-size: 20px;
  height: 40px;
  line-height: 40px;
  padding: 0px;
  text-align: left;
}

.button {
  border: none;
  outline: none;
  background: #6a9e8e;
  color: white;
  font-size: 15px;
  cursor: pointer;
  margin: auto auto;
  top: 48px;
  position: absolute;
  height: 40px;
  width: 100px;
  left: calc(50vw - 50px);
}

.whoami {
  font-size: 14px;
  margin: auto auto;
}

.whoami > .color {
  width: 10px;
  height: 10px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
}
</style>
