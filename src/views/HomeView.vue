<template>
  <div class="home">
    <products-index v-if="!showPopup" @show-create-popup="showPopup = true"></products-index>
    <pop-up v-if="showPopup" @close-popup="showPopup = false">
      <create-product @add-product="addProduct($event)"></create-product>
    </pop-up>
  </div>
</template>

<script>
import productsIndex from '../components/products/index.vue'
import popUp from '../components/popup.vue'
import createProduct from '@/components/products/create.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      showPopup : false
    }
  },
  methods:{
    toggleCreatePopup() {
      this.showPopup = !this.showPopup
    },
    async addProduct(product) {
      await this.$store.dispatch("addProduct", product).then(()=>{

      })
      this.showPopup = false
    }
  },
  components: {
    productsIndex,
    popUp,
    createProduct,
  }
}
</script>
