<template>
  <div class="order-form" v-if="isOrderFormActive"  v-scroll-lock="isOrderFormActive">
    <div class="order-form__wrapper" @click="closeOrderForm">
      <div class="order-form__block">
        <p class="order-form__title">Детали заказа</p>
        <ul class="order-form__list">
          <OrderFormItem v-for="item in cart" :key="`orderFormItem_${item.type}_${item.id}`" :item="item" />
        </ul>
        <OrderFormGifts />
        <OrderFormTotal />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      isOrderFormActive() {
        return this.$store.state.isOrderFormActive
      },
      cart() {
        return this.$store.state.cart
      }
    },
    methods: {
      closeOrderForm(e){
        const target = e.target
        if(target.classList.contains('order-form__wrapper')) {
          this.$store.commit('setOrderFormActive', false)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.order-form {
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 100;
  overflow-y: auto;

  &__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    border-top: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1;
  }

  &__wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background-color: #000000a3;
    cursor: pointer;
  }

  &__block {
    position: absolute;
    left: calc(50% - 300px);
    top: 100px;
    width: 600px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    background-color: #fff;
    z-index: 2;
    cursor: default;

    @media (max-width: 599px) {
      width: 100vw;
      left: 0;
      padding: 20px 10px;
    }
  }

  &__title {
    font-family: "PantonSemiBold";
    font-size: 24px;
    text-align: center;
    margin-bottom: 40px;
  }
}
</style>