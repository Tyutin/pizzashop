<template>
  <div class="overlay" @click="openOrderForm" />
</template>

<script>
  export default {
    methods: {
      openOrderForm() {
        this.$store.commit('setOverlayActive', false)
      }
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
  z-index: 100;
}
</style>