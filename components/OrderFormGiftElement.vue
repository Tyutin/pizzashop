<template>
  <div class="order-form-gift">
    <template v-if="this.gift.type === 'present'">
      <img :src="presentItemImage" alt='sas' class="order-form-gift__image">
      <span class="order-form-gift__name">
        {{ presentItemName }}
      </span>
      <span class="order-form-gift__forfree">Бесплатно</span>
    </template>
    <template v-if="this.gift.type === 'discount'">
      <div class="order-form-gift__discount-value">
        <span>-{{this.gift.discount}}%</span>
      </div>
      <span class="order-form-gift__name">
        {{ this.gift.description }}
      </span>
    </template>
    <!-- {{gift}}
    {{accessGifts}} -->
  </div>
</template>

<script>
  export default {
    props: {
      gift: {
        type: Object,
        default: {}
      }
    },
    computed: {
      accessGifts() {
        return this.$store.state.activeGift === this.gift
      },
      presentItem() {
        return this.$store.state.menu[this.gift.present.type].menu.find(el => el.id === this.gift.present.id)
      },
      presentItemImage() {
        return require(`@/static/images/menu/${this.presentItem.image}`)
      },
      presentItemName() {
        return this.presentItem.name
      }
    }
  }
</script>

<style lang="scss" scoped>
.order-form-gift {
  display: flex;
  align-items: center;

  &__discount-value {
    width: 70px;
    height: 70px;
    margin-right: 20px;
    border-radius: 7px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: $red;
    color: white;
    font-size: 24px;
  }

  &__image {
    width: 70px;
    height: 70px;
    margin-right: 20px;
    object-fit: cover;
    border-radius: 7px;
  }

  &__name {
    font-size: 18px;
    font-weight: 600;
    flex-grow: 1;
    margin-right: 15px;
  }

  &__forfree {
    margin-right: 10px;
    font-size: 18px;
  }
}
</style>