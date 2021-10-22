<template>
  <div class="page">
    <MenuSection v-for="menuItem in menuList" :key="menuItem.index" :menuObject="menu[menuItem]" :id=menuItem />
  </div>
</template>

<script>
export default {
  computed: {
    menu() {
      return this.$store.state.data.menu
    },
    menuList() {
      return Object.keys(this.menu)
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
