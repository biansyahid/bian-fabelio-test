<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="q-pa-lg">
      <div class="row q-col-gutter-md items-center">
        <div class="col-md-4 col-12">
          <q-input
            dark
            color="white"
            type="text"
            class="col-md-6 col-12"
            v-model="filterSearch"
            placeholder="Search Furniture"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
        <div class="col-md-4 col-sm-6 col-12">
          <q-btn
            label="Furniture Style" no-caps
            align="between"
            class="full-width"
            color="white"
            text-color="black"
            :ripple="false"
            icon-right="arrow_drop_down"
          >
            <q-menu fit>
              <q-list>
                <q-item-label header>Furniture Style</q-item-label>
                <q-item v-for="(fStyle, index) in furnitureStyles" :key="index" tag="label">
                  <q-item-section>
                    <q-item-label>{{fStyle}}</q-item-label>
                  </q-item-section>
                  <q-item-section avatar>
                    <q-checkbox v-model="filterFurnitureStyle" :val="fStyle" color="teal" />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
        <div class="col-md-4 col-sm-6 col-12">
          <q-btn
            label="Delivery Time" no-caps
            align="between"
            class="full-width"
            color="white"
            text-color="black"
            :ripple="false"
            icon-right="arrow_drop_down"
          >
            <q-menu fit>
              <q-list>
                <q-item-label header>Delivery Time</q-item-label>
                <q-item v-for="(time, index) in deliveryTimeSelection" :key="index" tag="label">
                  <q-item-section>
                    <q-item-label>{{time.label}}</q-item-label>
                  </q-item-section>
                  <q-item-section avatar>
                    <q-checkbox v-model="filterDeliveryTime" :val="time" color="teal" />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </div>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  computed: {
    filterSearch: {
      get () {
        return this.$store.getters['products/getFilterSearch']
      },
      set (newValue) {
        this.$store.commit('products/setFilterSearch', newValue)
      }
    },
    filterFurnitureStyle: {
      get () {
        return this.$store.getters['products/getFilterFurnitureStyle']
      },
      set (newValue) {
        this.$store.commit('products/setFilterFurnitureStyle', newValue)
      }
    },
    filterDeliveryTime: {
      get () {
        return this.$store.getters['products/getFilterDeliveryTime']
      },
      set (newValue) {
        this.$store.commit('products/setFilterDeliveryTime', newValue)
      }
    },
    furnitureStyles () {
      return this.$store.getters['products/getFurnitureStyles']
    }
  },
  data () {
    return {
      // min max duration in days
      deliveryTimeSelection: [
        {
          min: 0,
          max: 7,
          label: '1 Week'
        },
        {
          min: 8,
          max: 14,
          label: '2 Weeks'
        },
        {
          min: 15,
          max: 31,
          label: '1 Month'
        },
        {
          min: 32,
          max: 9999,
          label: '& More'
        }
      ]
    }
  },
  mounted () {
    // initial check for filter delivery time
    this.$store.commit('products/setFilterDeliveryTime', this.deliveryTimeSelection)
  }
}
</script>
