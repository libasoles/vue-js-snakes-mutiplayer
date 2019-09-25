<template>
  <section class="scene" 
    v-bind:style="{
      width: dimensions.width + 'px',
      height: dimensions.heigth + 'px'
    }">

    <Fruit v-for="fruit in fruits" 
      :key="fruit.id"
      :position="fruit.position"
      :size="fruit.size"></Fruit>

    <Snake v-for="snake in snakes" 
      :key="snake.id"
      :position="snake.head.position" 
      :headSize="snake.head.size"
      :tail="snake.tail"
      :color="snake.color"
    ></Snake>
  </section>
</template>

<script>
import Snake from './Snake';
import Fruit from './Fruit';

export default {
  name: 'Scene',
  components: {
    Snake,
    Fruit
  },
  props: ['dimensions', 'snakes', 'fruits'],
}
</script>

<style scoped>
.scene {  
  background: #313131;
  position: relative;
  margin: 0 auto;
}
</style>