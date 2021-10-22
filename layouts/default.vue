<template>
  <div>
    <Header />
    <Nuxt />
    <CartIcon />
    <Overlay v-if="isOverlayActive"  v-scroll-lock="isOverlayActive"/>
  </div>
</template>

<script>
export default {
  mounted () {
    if(process.client){
      const localCart = JSON.parse(localStorage.getItem('cart'));
      if (localCart && Array.isArray(localCart)) {
        this.$store.commit('cart/set', localCart)
      }
    }
  },
  computed: {
    isOverlayActive() {
      return this.$store.state.isOverlayActive
    }
  },
}
</script>

<style>
</style>
