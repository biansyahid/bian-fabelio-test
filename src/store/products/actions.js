import axios from 'axios'

export function retrieveProducts ({ commit }) {
  return axios.get('https://www.mocky.io/v2/5c9105cb330000112b649af8').then(response => {
    commit('setFurnitureStyles', response.data.furniture_styles)
    commit('setFilterFurnitureStyle', response.data.furniture_styles)
    commit('setProducts', response.data.products)
  })
}
