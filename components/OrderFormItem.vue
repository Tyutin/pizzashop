<template>
  <li class="order-form-item">
    <img :src="image" alt="" class="order-form-item__image">
    <span class="order-form-item__title">{{ name }}</span>
    <div class="order-form-item__count-wrapper">
      <button class="order-form-item__count-button order-form-item__minus"  @click="deleteFromCart(item.id, item.type)" />
      <span class="order-form-item__count">{{ item.count }}</span>
      <button class="order-form-item__count-button order-form-item__plus"  @click="addToCart(item.id, item.type)" />
    </div>
    <span class="order-form-item__summ">{{ summ }} р.</span>
    <button class="order-form-item__remove order-form-item__count-button" @click="removeFromCart(item.id, item.type)"></button>
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
        return this.$store.state.data.menu[this.item.type].menu.find((el) => (el.id === this.item.id && el.type === this.item.type))
      },
      name() {
        return this.tovar.name
      },
      image() {
        return require(`@/static/images/menu/${this.tovar.image}`)
      },
      summ() {
        return this.item.count * this.tovar.price
      }
    },
    methods: {
      getName(id, type) {
        return this.menu[type].menu.find((el) => el.id === id).name
      },
      addToCart (id, type) {
        this.$store.commit('cart/add', {id:id, type:type})
      },
      deleteFromCart (id, type) {
        this.$store.commit('cart/delete', {id:id, type:type})
      },
      removeFromCart(id, type) {
        this.$store.commit('cart/remove', {id:id, type:type})
      }
    },
  }
</script>

<style lang="scss" scoped>
.order-form-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;

  &__count {
    width: 30px;
    display: flex;
    justify-content: center;
  }

  &__count-wrapper {
    display: flex;
    align-items: center;
    margin-right: 10px;
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

  &__remove {
    margin-left: 10px;
    transform: rotate(45deg);

    &::before {
      content: "";
      position: absolute;
      width: 13px;
      height: 1px;
      background-color: lightgrey;
      top: 47%;
      left: 1px;
    }
    &::after {
      content: "";
      position: absolute;
      width: 1px;
      height: 13px;
      background-color: lightgrey;
      top: 1px;
      left: calc(50% - 1px);
    }
  }

  &__title {
    font-size: 18px;
    font-weight: 600;
    flex-grow: 1;
    margin-right: 15px;
  }

  &__image {
    width: 70px;
    height: 70px;
    margin-right: 20px;
    object-fit: cover;
    border-radius: 7px;
  }

  &__summ {
    min-width: 55px;
    text-align: center;
    margin: 0 10px;
  }
}
</style>