import json from '@/static/pizzas.json'

export const state = () => ({
  data: json,
  isNavActive: false,
  isOverlayActive: false
})

export const mutations = {
  setNavActive(state) {
    state.isNavActive = true;
    state.isOverlayActive = true;
  },
  closeOverlay(state) {
    state.isOverlayActive = false;
    state.isNavActive = false;
  },
}