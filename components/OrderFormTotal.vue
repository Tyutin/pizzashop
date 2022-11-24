<template>
  <div class="order-form-total">
    <span class="order-form-total__text">Итого:</span>
    <span class="order-form-total__summ" :class="{line : cartDiscountAmount > 0}">{{ cartAmount }}р.</span>
    <span class="order-form-total__discount-summ" v-if="cartDiscountAmount > 0">{{ cartDiscountAmount }}р.</span>
  </div>
</template>

<script>
  export default {
    computed: {
      cartAmount() {
        return this.$store.state.cartAmount
      },
      cartDiscountAmount() {
        return this.$store.state.cartDiscountAmount
      }
    },
  }
</script>

<style lang="scss" scoped>
.order-form-total {
  margin-top: 20px;
  display: flex;
  align-items: baseline;
  font-size: 18px;

  &__text {
    flex-grow: 1;
    text-align: right;
    line-height: 1;
  }

  &__summ,
  &__discount-summ {
    margin-left: 15px;
    font-family: "PantonBold";
    color: $red;
    font-size: 22px;
    line-height: 1;
  }

  &__summ {
    &.line {
      text-decoration: line-through;
      font-size: 16px;
      color: #000;
    }
  }
}
</style>