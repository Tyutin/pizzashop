import json from '@/static/menu.json'

export const state = () => ({
  menu: json.menu,
  gifts: json.gifts,
  accessGifts: [],
  activeGift: {},
  cart: [],
  cartCount: 0,
  cartAmount: 0,
  cartIsActiveClass: false,
  isOrderFormActive: false
})

const checkGiftCondition = (state, gift) => {
  const { type, count, name } = gift.condition;
  switch (name) {
    case 'typeCartCount':
      let cartCount = 0;
      state.cart.forEach((el) => {
        if (el.type === type) {
          cartCount += el.count;
        }
      })
      if (cartCount >= count) state.accessGifts.push(gift);
      break;
    default:
      break;
  }
}
const updateGifts = (state) => {
  state.accessGifts = [];
  state.gifts.forEach((el) => checkGiftCondition(state, el))
  if (state.accessGifts.length === 0) {
    state.activeGift = {}
  } else if ((state.accessGifts.length > 0 && Object.keys(state.activeGift).length === 0) || (!state.accessGifts.includes(state.activeGift))) {
    state.activeGift = state.accessGifts[0]
  }
}
const updateCartCount = (state) => {
  let count = 0;
  state.cart.forEach((el) => {
    count += el.count;
  });
  state.cartCount = count;
}
const updateCartAmount = (state) => {
  let amount = 0;
  state.cart.forEach((el) => {
    amount += el.count * el.price;
  });
  state.cartAmount = amount;
}
const updateCart = (state) => {
  updateCartCount(state)
  updateCartAmount(state)
  updateGifts(state)
  if (!!localStorage) {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }
}

export const mutations = {
  setOrderFormActive(state, isActive) {
    state.isOrderFormActive = isActive
  },
  setCartIsActiveClass(state, isActive) {
    state.cartIsActiveClass = isActive
  },
  setActiveGift(state, gift) {
    state.activeGift = gift;
  },
  addToCart(state, obj) {
    const { id, type, price } = obj
    const item = state.cart.find(el => (el.id === id && el.type === type))
    if (!item) {
      state.cart.push({ id: id, count: 1, type: type, price: price })
    } else if (item.count < 50) {
      item.count++
    } else {
      return
    }
    updateCart(state)
  },
  deleteFromCart(state, obj) {
    const { id, type } = obj
    const item = state.cart.find(el => (el.id === id && el.type === type))
    if (item.count > 1) {
      item.count--
    } else {
      state.cart = state.cart.filter((el) => el !== item)
    }
    if (state.cart.length < 1) {
      state.isOrderFormActive = false
    }
    updateCart(state)
  },
  removeFromCart(state, obj) {
    const { id, type } = obj
    const item = state.cart.find(el => (el.id === id && el.type === type))
    state.cart = state.cart.filter((el) => el !== item)
    if (state.cart.length < 1) {
      state.isOrderFormActive = false
    }
    updateCart(state)
  },
  setCart(state, localCart) {
    state.cart = localCart
    updateCart(state)
  }
}