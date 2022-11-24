<template>
  <div class="order-form-gifts" v-if="accessGifts.length > 0">
    <p class="order-form-gifts__title">{{accessGifts.length > 1 ? 'Выберите подарок' : 'Ваш подарок:'}}</p>
    <div class="order-form-gifts__list-wrapper" v-if="accessGifts.length > 1">
      <div class="order-form-gifts__current-gift" v-if="!isGiftListActive" @click.stop="setGiftListActive(true)">
        <OrderFormGiftElement :gift="activeGift"/>
        <button class="order-form-gifts__current-gift-button" />
      </div>
      <ul class="order-form-gifts__list"
        v-if="isGiftListActive"
        @click.stop="setGiftListActive(false)"
        v-click-outside="hide"
      >
        <li class="order-form-gifts__element"
          v-for="(gift, index) in accessGifts"
          :key="`giftElement__${gift.type}__${index}`"
          @click="setActiveGift(gift)"
          :class="{ active : activeGift === gift }"
        >
          <OrderFormGiftElement :gift="gift" />
        </li>
      </ul>
    </div>
    <OrderFormGiftElement v-if="accessGifts.length === 1" :gift="accessGifts[0]" />
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
  export default {
    data () {
      return {
        isGiftListActive: false
      }
    },
    methods: {
      setGiftListActive(value) {
        this.isGiftListActive = value
      },
      hide(){
        this.isGiftListActive = false
      },
      setActiveGift(gift) {
        this.$store.commit('setActiveGift', gift)
      }
    },
    computed: {
      accessGifts() {
        return this.$store.state.accessGifts
      },
      activeGift() {
        return this.$store.state.activeGift
      },
    },
    directives: {
      ClickOutside
    }
  }
</script>

<style lang="scss" scoped>
.order-form-gifts {
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  &__current-gift-button {
    position: absolute;
    right: 0;
    top: calc(50% - 20px);
    width: 40px;
    height: 40px;
    background-color: #ffe9e9;
    border: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    cursor: pointer;

    &::after,
    &::before {
      background-color: #acacac;
      border-radius: 2px;
      transition: background-color 0.3s ease;
      width: 4px;
      height: 15px;
    }

    &::before {
      content: "";
      position: absolute;
      left: 14px;
      top: 14px;
      transform: rotate(-40deg);
    }

    &::after {
      content: "";
      position: absolute;
      right: 14px;
      top: 14px;
      transform: rotate(40deg);
    }
  }

  &__current-gift {
    position: relative;
    padding-right: 50px;
    cursor: pointer;

    &:hover {
      .order-form-gifts__current-gift-button {
        background: #d5d5d5;

        &::before,
        &::after {
          background-color: #939292;
        }
      }
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  &__title {
    font-family: "PantonSemiBold", sans-serif;
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
  }

  &__element {
    margin-bottom: 10px;
    border-radius: 7px;
    transition: background-color 0.3s ease;
    cursor: pointer;
    order: 1;

    &:hover {
      background-color: #ffe9e9;
    }

    &.active {
      order: 0;
    }
  }
}
</style>