export const state = () => ({
  cart: [],
  cartIsActive: false
})

export const mutations = {
  add(state, id) {
    const item = state.cart.find(el => el.id === id);
    if (!item) {
      state.cart.push({id: id, count: 1});
    } else {
      item.count++;
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