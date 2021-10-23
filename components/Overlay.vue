<template>
  <div class="overlay" @click="closeOnClick">
    <slot/>
  </div>
</template>

<script>
  export default {
    props: {
      closeOnClick: {
        type: Function,
        default: () => {}
      },
    },
  }
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: #000000a3;
  cursor: pointer;
}
</style>