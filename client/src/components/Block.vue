<template>
  <div class="block"      
    v-bind:style="{ 
      width: size + 'px',
      height: size + 'px',
      top: position.y + 'px', 
      left: position.x + 'px',
      background: color
    }">
  </div>
</template>

<script>
export default {
  name: "Block",
  props: ['position', 'size', 'color']
}
</script>

<style scoped>
.block {  
  background: white;
  position: absolute;
}
</style>