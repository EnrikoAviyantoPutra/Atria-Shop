<template>
<div class="container d-flex flex-row justify-content-center">
  <div class="card ml-2" v-for="Product in Products" :key='Product.id' >
  <b-card
    :title='Product.name'
    :img-src='Product.img_url'
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 300rem;"
    class="mb-2"
  >
  <hr>
    <b-card-text>Stock:
      {{Product.stock}}
    </b-card-text>
    <b-card-text>Rp
      {{Product.price}}
    </b-card-text>
    <b-button @click.prevent="addCart(Product.id)" variant="primary">+Add to cart</b-button>
  </b-card>
</div>
</div>
</template>

<script>
export default {
  computed: {
    Products () {
      return this.$store.state.allProducts
    }
  },
  methods: {
    addCart (ProductId) {
      this.$store.dispatch('createCart', ProductId)
    }
  }

}
</script>

<style scoped>
</style>
