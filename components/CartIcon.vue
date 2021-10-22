<template>
  <button class="cart-button" :class="{ popped : isCartActive }" v-if="cartLength > 0">
    <img src="@/static/images/ccart.svg" alt="">
    <span class="cart-button__count">{{cartCount}}</span>
  </button>
</template>

<script>
  export default {
    computed: {
      cartLength() {
        return this.$store.state.cart.cart.length
      },
      cartCount() {
        let count = 0;
        this.$store.state.cart.cart.forEach(element => {
          count += element.count
        });
        return count
      },
      isCartActive() {
        return this.$store.state.cart.cartIsActive
      }
    }
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