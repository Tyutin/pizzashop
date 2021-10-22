<template>
  <div>
    <MenuSection :menuObject="menu.pizza" />
  </div>
</template>

<script>
export default {
  computed: {
    menu() {
      return this.$store.state.data.menu
    }
  }
}
</script>

<style>
</style>
