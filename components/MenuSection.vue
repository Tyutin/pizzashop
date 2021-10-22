<template>
  <section class="menu-section">
    <div class="container">
      <h2 class="menu-section__title">{{menuObject.name}}</h2>
      <p class="menu-section__description">{{menuObject.description}}</p>
      <MenuList :menuList="menuObject.menu"/>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      menuObject: {
        type: Object,
        default: {}
      },
    },
  }
</script>

<style lang="scss" scoped>
.menu-section {
  width: 100%;

  & .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    margin-bottom: 20px;
    font-family: PantonSemiBold, sans-serif;
    font-size: 48px;
  }

  &__description {
    max-width: 660px;
    margin-bottom: 30px;
    font-size: 24px;
    font-weight: 300;
    line-height: 1.6;
    text-align: center;
    
    @media (max-width: $tabletToMobile) {
      font-size: 18px;
      line-height: 1.4;
    }
  }
}
</style>