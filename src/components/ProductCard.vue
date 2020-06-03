<template>
  <q-card class="q-pa-lg full-height">
    <q-card-section class="no-padding">
      <div class="row items-center no-wrap">
        <div class="col text-h6 text-bold">
          {{product.name}}
        </div>
        <div class="col-auto text-body1 text-bold text-orange">
          {{productPrice}}
        </div>
      </div>
      <div class="text-body1 q-py-md">
        {{productDescription}}
      </div>
      <div class="text-blue text-body1">
        {{productFurnitureStyle}}
      </div>
      <div class="q-py-sm text-body1 text-weight-bold text-blue-9 text-right">
        <u>{{productDelivery}}</u>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    productDescription () {
      if (this.product.description) {
        return this.product.description.substring(0, 114).concat(' ...')
      }
      return ''
    },
    productPrice () {
      if (this.product.price) {
        return `${Number(this.product.price).toLocaleString('id')} IDR`
      }
      return '0 IDR'
    },
    productFurnitureStyle () {
      if (this.product.furniture_style.length > 0) {
        let styles = ''
        for (const x in this.product.furniture_style) {
          styles += (`${this.product.furniture_style[x]}, `)
        }
        styles = styles.trim().slice(0, -1)
        return styles
      }
      return ''
    },
    productDelivery () {
      if (this.product.delivery_time) {
        return `${this.product.delivery_time} Days`
      }
      return '0 Days'
    }
  }
}
</script>

<style scoped>

</style>
