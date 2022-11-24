<template>
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="header__info">
          <h1 class="header__info-title">Доставка пиццы в Ижевске</h1>
          <div class="header__info-social">
            <a target="_blank" href="https://vk.com/vkysnoizh" class="header__info-social-link">
              <img src="@/static/images/vk.svg" alt="">
            </a>
            <a target="_blank" href="https://www.instagram.com/pizza_zhivivkusno/" class="header__info-social-link">
              <img src="@/static/images/inst.svg" alt="">
            </a>
          </div>
        </div>
        <img src="@/static/images/logo.png" alt="Живи Вкусно" class="header__logo">
        <div class="header__info">
          <span class="header__info-text">Служба доставки</span>
          <a href="tel:+73412566640" class="header__info-phone">566-640</a>
        </div>
      </div>
    </div>
    <div class="container header__bottom">
      <span class="header__menu">
        Меню
      </span>
      <div class="header__toggle" :class="{ active : isToggleActive }" @click="ToggleNav" />
      <nav :class="{ active : isToggleActive }">
        <ul>
          <li @click="ToggleNav">
            <a v-scroll-to="'#pizza'" to="#pizza">
              пицца
            </a>
          </li>
          <li @click="ToggleNav">
            <a v-scroll-to="'#pirog'" to="#pirogi">
              пироги
            </a>
          </li>
          <li @click="ToggleNav">
            <a v-scroll-to="'#desert'" to="#deserty">
              десерты
            </a>
          </li>
          <li @click="ToggleNav">
            <a v-scroll-to="'#napitok'" to="#napitki">
              напитки
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        isToggleActive: false
      }
    },
    methods: {
      ToggleNav () {
        this.isToggleActive = !this.isToggleActive
      }
    }
  }
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background-color: #fff;
  z-index: 999;
  @media screen and (max-width: 1109px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 56px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 240px;
    color: black;
  }

  &__info-text {
    text-align: center;
    font-size: 24px;
  }

  &__info-title {
    margin-bottom: 10px;
    text-align: center;
    font-size: 24px;
  }

  &__info-phone {
    color: $red;
    font-family: "PantonBold";
    font-size: 40px;
  }

  &__info-social {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  &__info-social-link {
    margin: 0 5px;
  }

  &__info-social-link {
    display: block;
  }

  &__logo {
    width: 140px;
    height: 140px;
  }

  &__menu {
    @media screen and (min-width: 1110px) {
      display: none;
    }

    color: #fff;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    padding: 8px;

    @media screen and (max-width: 1109px) {
      height: 100%;
      background-color: $red;
      align-items: center;
      padding: 12px 14px;
    }

    nav {
      @media screen and (max-width: 1109px) {
        position: absolute;
        left: 0;
        top: 56px;
        height: calc(100vh - 56px);
        background-color: #fff;
        transition: 0.3s;
        width: 100%;
        padding: 10px 0;
        display: none;
      }
    }

    nav.active {
      @media screen and (max-width: 1109px) {
        display: block;
      }
    }

    > nav > ul {
      list-style-type: none;
      display: flex;
      color: black;

      @media screen and (max-width: 1109px) {
        display: flex;
        flex-direction: column;
      }

      > li > a {
        display: block;
        padding: 5px 0;
        margin-left: 15px;
        font-size: 19px;
        font-family: "PantonSemiBold", sans-serif;
        text-transform: uppercase;
        cursor: pointer;

        @media screen and (max-width: 1109px) {
          padding: 10px 20px;
          margin-left: 0;
          text-align: center;
        }
      }
    }
  }

  &__top {
    max-width: 1024px;
    margin: 0 auto;
    padding-top: 8px;
    font-size: 18px;

    @media screen and (max-width: 1109px) {
      display: none;
    }

    > .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__toggle {
    @media screen and (min-width: 1110px) {
      display: none;
    }

    position: relative;
    display: block;
    width: 31px;
    height: 22px;
    border-top: 3px solid #fff;
    border-bottom: 3px solid #fff;
    transition: 0.4s;
  }

  &__toggle::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 99%;
    height: 3px;
    background: #fff;
    -webkit-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
  }

  &__toggle::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 99%;
    height: 3px;
    background: #fff;
    -webkit-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
  }

  &__toggle.active {
    border-color: transparent;
  }

  &__toggle.active::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &__toggle.active::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}
</style>