<template>
  <div>
    <Header />
    <Nuxt />
    <CartIcon />
    <OrderForm />
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
}
</script>

<style>
</style>
