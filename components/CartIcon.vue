<template>
  <button class="cart-button" :class="{ popped : isCartActiveClass }" v-if="cartCount > 0" @click="openOrderForm">
    <span class="cart-button__count">{{cartCount}}</span>
  </button>
</template>

<script>
  export default {
    computed: {
      cartCount() {
        return this.$store.state.cart.cartCount
      },
      isCartActiveClass() {
        return this.$store.state.cart.cartIsActiveClass
      }
    },
    methods: {
      openOrderForm() {
        this.$store.commit('cart/setOrderFormActive', true)
      }
    },
  }
</script>

<style lang="scss" scoped>
.cart-button {
  width: 80px;
  height: 80px;
  position: fixed;
  right: 80px;
  bottom: 40px;
  border-radius: 50%;
  border: none;
  box-shadow: 0 0 20px -7px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  background-color: #efefef;
  transition: transform 0.3s ease;
  background-image: url("@/static/images/ccart.svg");
  background-size: 68%;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    transform: scale(1.1);
  }

  &.popped {
    transform: scale(1.2);
  }

  @media (max-width: 1024px) {
    right: 30px;
    bottom: 30px;
  }

  @media (max-width: $tabletToMobile) {
    right: 15px;
    bottom: 15px;
    width: 60px;
    height: 60px;
  }

  & img {
    width: 50px;
    height: 50px;

    @media (max-width: $tabletToMobile) {
      width: 30px;
      height: 30px;
    }
  }

  &__count {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #b80909;
    color: #fff;
    border-radius: 50%;

    @media (max-width: $tabletToMobile) {
      width: 23px;
      height: 23px;
      font-size: 12px;
    }
  }
}
</style>