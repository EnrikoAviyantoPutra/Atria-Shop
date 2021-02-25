<template>
  <div class="cart">
    <Navbar />
    <div class="row">
      <div class="col-md-10">
        <div v-if="Carts.length == 0" class="d-flex flex-row justify-content-center">
          <h2> You Dont Have Any Cart</h2>
        </div>
        <div class="container d-flex flex-column justify-content-center align-items-center">
          <b-card no-body class="overflow-hidden shadow-lg mb-3" style="max-width: 540px;" v-for="Cart in Carts" :key="Cart.id">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img :src="Cart.Product.img_url"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body :title="Cart.Product.name">
                  <b-card-text>
                    <h5>Rp {{Cart.Product.price}} @each</h5>
                  </b-card-text>
                  <div class="container d-flex flex-row justifiy-content-around flex-wrap">
                  <button type="click" name="button" :disabled="Cart.quantity==1" @click.prevent="reduceQuantity(Cart.id)" class="btn login_btn bg-primary text-white ml-3"> - </button>
                  <p class=" ml-3 mr-3"> {{Cart.quantity}}</p>
                  <button type="click" name="button" :disabled="Cart.quantity==Cart.Product.stock" @click.prevent="addQuantity(Cart.id)" class="btn login_btn bg-primary text-white"> + </button>
                  <button type="click" name="button"  @click.prevent="removeCart(Cart.id)" class="btn login_btn bg-danger text-white mt-3">Remove Cart</button>
                  </div>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
        </div>
      <div class="col-md-2">
        <div class="container-fluid d-flex flex-column justify-content-center align-items-center">
            <h2>TOTAL PRICE:</h2><br>
            <h2> Rp {{totalPrice()}}</h2>
            <button type="click" name="button" @click.prevent="checkout" class="btn login_btn bg-warning text-dark mt-3" style="font-weight: bold">Check Out</button>

        </div>
      </div>
    </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  },
  computed: {
    Carts () {
      return this.$store.state.allCarts
    }
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProducts')
    },
    fetchCart () {
      this.$store.dispatch('fetchCart')
    },
    addQuantity (cartId) {
      this.$store.dispatch('addQuantity', cartId)
    },
    reduceQuantity (cartId) {
      this.$store.dispatch('reduceQuantity', cartId)
    },
    removeCart (cartId) {
      this.$store.dispatch('removeCart', cartId)
    },
    totalPrice () {
      const carts = this.$store.state.allCarts
      console.log(carts)
      let totalPrice = 0

      for (const i of carts) {
        console.log(i)
        totalPrice += i.quantity * i.Product.price
      }
      console.log('ini total price', totalPrice)
      return totalPrice
    },
    checkout () {
      const cartData = this.$store.state.allCarts
      console.log(cartData[0], 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx')
      this.$store.dispatch('checkoutCart', cartData[0])
    }
  },
  created () {
    // this.fetchProduct()
    this.fetchCart()
    this.totalPrice()
  }

}
</script>
