<template>
  <div class="home">
    <Navbar/>
    <div class="row">
      <div class="col-md-2">ini sidebar kiri</div>
      <div class="col-md-10"> ini content kanan
        <Banner/>
        <div class="d-flex row">
      <Products/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Products from '@/components/Products.vue'
import Banner from '@/components/Banner.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Products,
    Banner
  },
  computed: {
    Products () {
      return this.$store.state.allProducts
    }

  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProducts')
    },
    fetchBanner () {
      this.$store.dispatch('fetchBanner')
    },
    fetchCart () {
      this.$store.dispatch('fetchCart')
    }
  },
  created () {
    this.fetchProduct()
    this.fetchBanner()
    this.fetchCart()
  }

}
</script>
