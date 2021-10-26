import json from '@/static/menu.json'

export const state = () => ({
  data: json,
  isNavActive: false
})

export const mutations = {
  setNavActive(state) {
    state.isNavActive = true;
    state.isOverlayActive = true;
  },
  closeOverlay(state) {
    state.isOverlayActive = false;
    state.isNavActive = false;
  }
}