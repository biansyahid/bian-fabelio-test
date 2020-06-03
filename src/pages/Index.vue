<template>
  <q-page class="q-pa-lg bg-grey-2">
    <div class="row q-col-gutter-md">
      <div v-for="(product, index) in filteredProducts"
           :key="index"
           class="col-md-4 col-sm-6 col-12"
      >
        <ProductCard :product="product" />
      </div>
    </div>
  </q-page>
</template>

<script>
import ProductCard from 'components/ProductCard'
export default {
  name: 'PageIndex',
  components: { ProductCard },
  computed: {
    filterSearch () {
      return this.$store.getters['products/getFilterSearch']
    },
    filterDeliveryTime () {
      return this.$store.getters['products/getFilterDeliveryTime']
    },
    filterFurnitureStyle () {
      return this.$store.getters['products/getFilterFurnitureStyle']
    },
    filteredProducts () {
      const products = this.$store.getters['products/getProducts']
      return products.filter(product => {
        // filter product by search
        return product.name.toUpperCase().includes(this.filterSearch.toUpperCase())
      }).filter(product => {
        // filter product by furniture style
        return !this.filterFurnitureStyle.every(style => {
          return !product.furniture_style.includes(style)
        })
        // return product.furniture_style.every(style => {
        //   return this.filterFurnitureStyle.includes(style)
        // })
      }).filter(product => {
        // filter product by delivery time
        return !this.filterDeliveryTime.every(time => {
          return !(product.delivery_time >= time.min && product.delivery_time <= time.max)
        })
      })
    }
  },
  async mounted () {
    this.$q.loading.show()
    await this.$store.dispatch('products/retrieveProducts')
    this.$q.loading.hide()
  }
}
</script>
