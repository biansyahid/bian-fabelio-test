export function setProducts (state, payload) {
  state.products = payload
}
export function setFurnitureStyles (state, payload) {
  state.furnitureStyles = payload
}
export function setFilterSearch (state, payload) {
  state.filter.search = payload
}
export function setFilterFurnitureStyle (state, payload) {
  state.filter.furnitureStyle = payload
}
export function setFilterDeliveryTime (state, payload) {
  state.filter.deliveryTime = payload
}
