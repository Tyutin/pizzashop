export const state = () => ({
  cart: [],
  cartIsActive: false
})

export const mutations = {
  add(state, obj) {
    const {id, type} = obj;
    const item = state.cart.find(el => (el.id === id && el.type === type));
    if (!item) {
      state.cart.push({id: id, count: 1, type: type});
    } else {
      item.count++;
    }
    if (!!localStorage) {
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  delete(state, obj) {
    const {id, type} = obj;
    const item = state.cart.find(el => (el.id === id && el.type === type));
    if (item.count > 1) {
      item.count--
    } else {
      state.cart = state.cart.filter((el) => el !== item)
    }
    if (!!localStorage) {
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  set(state, localCart) {
    state.cart = localCart
  },
  setCartIsActive(state, isActive) {
    state.cartIsActive = isActive
  }
}