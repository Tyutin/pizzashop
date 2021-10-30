import json from '@/static/menu.json'

export const state = () => ({
  menu: json.menu,
  gifts: json.gifts,
  activeGifts: [],
  cart: [],
  cartCount: 0,
  cartAmount: 0,
  cartIsActiveClass: false,
  isOrderFormActive: false
})

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