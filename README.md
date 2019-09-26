# Snakes

Basically, it's a `socket.io` + `Vue.js` exercise to try out a basic multiplayer game.

See this repo to inspect the original `Vue.js` client.

https://github.com/libasoles/vue-js-snake

## Demo

Play it online. Share the link and have fun!

https://snakes-gperez78.azurewebsites.net/


![Demo](https://github.com/libasoles/vue-js-snakes-mutiplayer/blob/master/screenshot/demo.gif)


### Design decisions

- state is immutable, and handled by Game instance only
- only Game instance interacts with clients
- there's a game loop, that notifies players their positions

## How to run?

This is a `monorepo` with both `client` and `server` folders.

#### Server
So, in order to run the server:

`cd server`

Then, as usual, install dependencies:

`yarn install`

And run:

`yarn start`

Then visit http://localhost:3000

#### Client

You could just run the server and see the compiled version. But if you want to run the client for development purposes, then:

`cd client`

`yarn install`

`yarn serve`
