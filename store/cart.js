export const state = () => ({
  cart: [],
  cartCount: 0,
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

export const mutations = {
  setOrderFormActive(state, isActive) {
    state.isOrderFormActive = isActive
  },
  setCartIsActiveClass(state, isActive) {
    state.cartIsActiveClass = isActive
  },
  add(state, obj) {
    const { id, type } = obj
    const item = state.cart.find(el => (el.id === id && el.type === type))
    if (!item) {
      state.cart.push({ id: id, count: 1, type: type })
    } else if (item.count < 100) {
      item.count++
    } else {
      return
    }
    updateCartCount(state)
    if (!!localStorage) {
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  delete(state, obj) {
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
    updateCartCount(state)
    if (!!localStorage) {
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  remove(state, obj) {
    const { id, type } = obj
    const item = state.cart.find(el => (el.id === id && el.type === type))
    state.cart = state.cart.filter((el) => el !== item)
    if (state.cart.length < 1) {
      state.isOrderFormActive = false
    }
    updateCartCount(state)
    if (!!localStorage) {
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  set(state, localCart) {
    state.cart = localCart
    updateCartCount(state)
  }
}