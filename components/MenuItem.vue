<template>
  <li class="menu-item">
    <img :src="image" :alt="menuItem.name" class="menu-item__image">
    <h3 class="menu-item__name">{{ menuItem.name }}</h3>
    <p v-if="menuItem.description" class="menu-item__description">{{ menuItem.description }}</p>
    <p class="menu-item__weight">{{ menuItem.weight }} {{ menuItem.unit }}</p>
    <p class="menu-item__price">{{ menuItem.price }} руб.</p>
    <button class="menu-item__addtocart">В корзину</button>
  </li>
</template>

<script>
  export default {
    props: {
      menuItem: {
        type: Object,
        default: {}
      },
    },
    computed: {
      image() {
        return require(`@/static/images/menu/${this.menuItem.image}`)
      }
    },
  }
</script>

<style lang="scss" scoped>
.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  margin-bottom: 50px;
  margin-right: 45px;
  
  @media (max-width: $pcToTablet) {
    width: 50%;
    margin: 0 0 45px;
    padding: 0 10px;
  }

  &:nth-child(3n){
    margin-right: 0;
    @media (max-width: $pcToTablet) {
    margin: 0 0 45px;
    }
  }
  
  @media (max-width: $tabletToMobile) {
    width: 100%;
    margin-bottom: 60px;
  }

  &__image {
    height: 250px;
    margin-bottom: 20px;
    object-fit: cover;
  
    @media (max-width: $tabletToMobile) {
      height: unset;
      max-height: 480px;
    }
  }

  &__name {
    margin-bottom: 20px;
    font-size: 22px;
  }

  &__description {
    max-width: 350px;
    text-align: center;

    @media (max-width: $tabletToMobile) {
      max-width: unset;
    }
  }

  &__weight {
    margin-bottom: 10px;
  }

  &__price {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 10px;
    font-family: PantonSemiBold, sans-serif;
    font-size: 18px;
  }

  &__addtocart {
    padding: 10px 40px;
    background-color: #b80909;
    color: #fff;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ff3714;
    }

    @media (max-width: $tabletToMobile) {
      width: 50%;
    }

    @media (max-width: $mobileToMobileL) {
      width: 80%;
    }
  }
}
</style>