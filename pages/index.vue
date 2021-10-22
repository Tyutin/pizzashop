<template>
  <div class="page">
    <MenuSection :menuObject="menu.pizza" id="pizza"/>
    <MenuSection :menuObject="menu.pirogi" id="pirogi"/>
    <MenuSection :menuObject="menu.deserty" id="deserty"/>
    <MenuSection :menuObject="menu.napitki" id="napitki"/>
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

<style lang="scss" scoped>
.page {
  padding-top: 20px;
  @media screen and (max-width: 1109px) {
    padding-top: 56px;
  }
}
</style>
