(function(t){function e(e){for(var s,o,a=e[0],c=e[1],u=e[2],f=0,p=[];f<a.length;f++)o=a[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},i={app:0},r=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/public/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("64a9"),i=n.n(s);i.a},1:function(t,e){},"32e4":function(t,e,n){},"3b0f":function(t,e,n){"use strict";var s=n("32e4"),i=n.n(s);i.a},"3b7c":function(t,e,n){"use strict";var s=n("b9b0"),i=n.n(s);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"vertical-container"},[n("div",{staticClass:"row",style:{width:t.scene.dimensions.width+"px"}},[n("div",{staticClass:"message"},[t._v(t._s(t.message))]),n("img",{staticClass:"logo",attrs:{src:"/public/logo.png",alt:"logo"}})]),n("Scene",{ref:"scene",attrs:{dimensions:t.scene.dimensions,snakes:t.scene.snakes,fruits:t.scene.fruits}}),t.status===t.statuses.ready?n("button",{staticClass:"button",on:{click:t.start}},[t._v("Start")]):t._e(),t.status===t.statuses.gameOver?n("button",{staticClass:"button",on:{click:t.restart}},[t._v("Restart")]):t._e(),n("keyboard",{on:{"arrow-pressed":t.setSnakeDirection}}),t.self?n("div",{staticClass:"message whoami",style:{width:t.scene.dimensions.width+"px"}},[n("span",{staticClass:"color",style:{background:t.self.color}}),t._v(" you\n    ")]):t._e()],1)])},r=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("7514"),n("bd86")),a=n("8055"),c=n.n(a),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"scene",style:{width:t.dimensions.width+"px",height:t.dimensions.heigth+"px"}},[t._l(t.fruits,(function(t){return n("Fruit",{key:t.id,attrs:{position:t.position,size:t.size}})})),t._l(t.snakes,(function(t){return n("Snake",{key:t.id,attrs:{position:t.head.position,headSize:t.head.size,tail:t.tail,color:t.color}})}))],2)},l=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"snake"},[n("Block",{attrs:{position:t.position,size:t.headSize,color:t.color}}),t._l(t.tail,(function(e,s){return n("Block",{key:s,attrs:{position:e,size:t.headSize,color:t.color}})}))],2)},p=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block",style:{width:t.size+"px",height:t.size+"px",top:t.position.y+"px",left:t.position.x+"px",background:t.color}})},h=[],b={name:"Block",props:["position","size","color"]},y=b,m=(n("3b0f"),n("2877")),v=Object(m["a"])(y,d,h,!1,null,"5a6ee5f0",null),g=v.exports,O={name:"Snake",props:["position","headSize","tail","color"],components:{Block:g}},w=O,k=Object(m["a"])(w,f,p,!1,null,null,null),j=k.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fruit",style:{width:t.size+"px",height:t.size+"px",top:t.position.y+"px",left:t.position.x+"px"}})},x=[],S={name:"Fruit",props:["position","size"]},P=S,z=(n("3b7c"),Object(m["a"])(P,_,x,!1,null,"5b790928",null)),C=z.exports,D={name:"Scene",components:{Snake:j,Fruit:C},props:["dimensions","snakes","fruits"]},E=D,K=(n("5dad"),Object(m["a"])(E,u,l,!1,null,"605af1b8",null)),M=K.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"arrows"})},$=[];function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function A(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?F(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var B={name:"Keyboard",mounted:function(){document.addEventListener("keydown",this.handleKeyboard)},data:function(){var t={up:!1,down:!1,left:!1,right:!1};return{activeKeys:A({},t),idleKeyboard:t}},methods:{handleVirtualKeyboard:function(t){this.react(t)},handleKeyboard:function(t){t.preventDefault();var e={ArrowLeft:"left",ArrowRight:"right",ArrowUp:"up",ArrowDown:"down"},n=e[t.key];n&&this.react(n)},resetKeyboardState:function(){this.activeKeys=A({},this.idleKeyboard)},react:function(t){this.resetKeyboardState(),this.activeKeys[t]=!0,this.broadcast(t)},broadcast:function(t){this.$emit("arrow-pressed",t)}}},G=B,J=(n("ab2e"),Object(m["a"])(G,T,$,!1,null,"184560b9",null)),L=J.exports;function R(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function I(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?R(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var U={ready:"ready",running:"running",gameOver:"game-over"},V={go:"Go!",eat:["Yum!","Delicious!","That was a nice one!","Ñam!","I'd like some more!","Tasty!"],collision:"Oh no!"},Y={message:"",id:void 0,scene:{dimensions:{width:0,height:0},snakes:[],fruits:[]},status:U.ready},q={name:"app",created:function(){this.statuses=U;var t=!1;this.socket=c()(t?"http://localhost:3000":"/")},mounted:function(){var t=this;this.socket.on("init",this.init),this.socket.on("snakes-positions",this.update),this.socket.on("fruit-eaten",(function(e){return t.fruitEaten(e)})),this.socket.on("new-fruit",(function(e){return t.addFruit(e)})),this.socket.on("wall-collision",(function(){return t.endGame(V.collision)}))},data:function(){return I({},Y)},computed:{self:function(){var t=this;return this.scene.snakes.find((function(e){var n=e.id;return n===t.id}))}},methods:{init:function(t){this.id=t.id,this.scene={dimensions:t.scene.dimensions,snakes:t.scene.snakes,fruits:t.scene.fruits}},start:function(){this.status=U.running,this.displayTemporalMessage(V.go)},update:function(t){var e=t.snakes;this.scene.snakes=e},fruitEaten:function(t){this.scene.fruits=this.scene.fruits.filter((function(e){return e.id!==t.id}));var e=V.eat[Math.round(Math.random()*V.eat.length)];this.displayTemporalMessage(e)},addFruit:function(t){this.scene.fruits.push(t)},setSnakeDirection:function(t){this.status===U.ready&&this.start(),this.status!==U.gameOver&&this.socket.emit("move",{direction:t})},displayTemporalMessage:function(t){var e=this;this.message=t,setTimeout((function(){e.message===t&&(e.message="")}),2e3)},endGame:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.message=t,this.status=U.gameOver},restart:function(){this.socket.emit("restart"),this.displayTemporalMessage("Go!"),this.status=U.running}},components:{Scene:M,Keyboard:L}},H=q,N=(n("034f"),Object(m["a"])(H,i,r,!1,null,null,null)),Q=N.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(Q)}}).$mount("#app")},"5dad":function(t,e,n){"use strict";var s=n("9d84"),i=n.n(s);i.a},"64a9":function(t,e,n){},"9d84":function(t,e,n){},ab2e:function(t,e,n){"use strict";var s=n("be22"),i=n.n(s);i.a},b9b0:function(t,e,n){},be22:function(t,e,n){}});
//# sourceMappingURL=app.bf331ee5.js.map