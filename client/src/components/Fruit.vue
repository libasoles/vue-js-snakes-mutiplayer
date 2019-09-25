<template>
  <div class="fruit"    
    v-bind:style="{ 
      width: size + 'px',
      height: size + 'px',
      top: position.y + 'px', 
      left: position.x + 'px'     
    }">  
  </div>
</template>

<script>
export default {
  name: "Fruit",
  props: ['position', 'size']
}
</script>

<style scoped>
.fruit {
  background: red;
  position: absolute;
}
</style>