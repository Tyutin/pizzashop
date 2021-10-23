<template>
  <li class="order-form-item">
    <img :src="image" alt="" class="order-form-item__image">
    <span class="order-form-item__title">{{ name }}</span>
    <div class="order-form-item__count-wrapper">
      <button class="order-form-item__count-button order-form-item__minus"  @click="deleteFromCart(item.id, item.type)" />
      <span class="order-form-item__count">{{ item.count }}</span>
      <button class="order-form-item__count-button order-form-item__plus"  @click="addToCart(item.id, item.type)" />
    </div>
    <span class="order-form-item__summ"></span>
    <button class="order-form-item__remove"></button>
  </li>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        default: {}
      }
    },
    computed: {
      tovar() {
        return this.$store.state.data.menu[this.item.type].menu.find((el) => el.id === this.item.id)
      },
      name() {
        return this.tovar.name
      },
      image() {
        return require(`@/static/images/menu/${this.tovar.image}`)
      }
    },
    methods: {
      closeOrderForm() {
        this.$store.commit('setOrderFormActive', false)
      },
      getName(id, type) {
        return this.menu[type].menu.find((el) => el.id === id).name
      },
      addToCart (id, type) {
        this.$store.commit('cart/add', {id:id, type:type})
      },
      deleteFromCart (id, type) {
        this.$store.commit('cart/delete', {id:id, type:type})
        if (this.$store.state.cart.cart.length < 1) {
          this.$store.commit('setOrderFormActive', false)
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
.order-form-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__count {
    width: 30px;
    display: flex;
    justify-content: center;
  }

  &__count-wrapper {
    display: flex;
    align-items: center;
  }

  &__count-button {
    width: 17px;
    height: 17px;
    border-radius: 50%;
    border: 1px solid lightgrey;
    background-color: #fff;
    position: relative;
    cursor: pointer;
  }

  &__minus {
    &::before {
      content: "";
      position: absolute;
      width: 9px;
      height: 1px;
      background-color: lightgrey;
      top: 50%;
      left: 3px;
    }
  }

  &__plus {
    &::before {
      content: "";
      position: absolute;
      width: 9px;
      height: 1px;
      background-color: lightgrey;
      top: 50%;
      left: 3px;
    }
    &::after {
      content: "";
      position: absolute;
      width: 1px;
      height: 9px;
      background-color: lightgrey;
      top: 3px;
      left: 50%;
    }
  }

  &__title {
    font-size: 18px;
    font-weight: 600;
  }

  &__image {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 7px;
  }
}
</style>