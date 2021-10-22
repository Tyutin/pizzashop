<template>
  <ul class="menu-list">
    <MenuItem v-for="item in menuList" :key="item.id" :menuItem="item" />
  </ul>
</template>

<script>
  export default {
    props: {
      menuList: {
        type: Array,
        default: []
      },
    },
  }
</script>

<style lang="scss" scoped>
.menu-list {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
}
</style>