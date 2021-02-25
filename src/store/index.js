import axios from '@/api/axios'
import Vue from 'vue'
import Vuex from 'vuex'
import Swal from 'sweetalert2'
import router from '../router/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allProducts: [],
    allBanners: [],
    allCarts: [],
    allTransaction: []
  },
  mutations: {
    FETCH_DATA_PRODUCT (state, payload) {
      state.allProducts = payload
    },
    FETCH_DATA_BANNERS (state, payload) {
      state.allBanners = payload
    },
    FETCH_DATA_CART (state, payload) {
      state.allCarts = payload
    },
    FETCH_DATA_TRANSACTION (state, payload) {
      state.allTransaction = payload
    }
  },
  actions: {
    registerCustomer (context, payload) {
      console.log(payload, 'ini di action registerCustomer')
      axios({
        method: 'POST',
        url: '/customer/register',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(data => {
          console.log(data)
          Swal.fire({
            icon: 'success',
            title: 'Succsessfuly Sign Up'
          })
        })
        .catch((err) => {
          console.log(err.response.data.errors)
          Swal.fire({
            icon: 'error',
            title: 'Oops....',
            text: `${err.response.data.errors}`
          })
        })
    },
    loginCustomer (context, payload) {
      console.log(payload, 'ini di action login customer')
      axios({
        method: 'POST',
        url: '/customer/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          console.log(data)
          localStorage.access_token = data.access_token
          Swal.fire({
            icon: 'success',
            title: 'Welcome',
            text: 'To Atria Pet Shop'
          })
          router.push({ name: 'Home' })
        })
        .catch((err) => {
          console.log(err.response.data.errors)
          Swal.fire({
            icon: 'error',
            title: 'Oops....',
            text: `${err.response.data.errors}`
          })
        })
    },
    logout (context) {
      localStorage.clear()
      Swal.fire({
        icon: 'success',
        text: 'Successfuly Logout'
      })
    },
    fetchProducts (context) {
      console.log('ini di action fetchProduct')
      axios({
        method: 'GET',
        url: '/customer/products'
      })
        .then(response => {
          context.commit('FETCH_DATA_PRODUCT', response.data)
          console.log(response.data, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<isi database')
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    fetchBanner (context) {
      console.log('ini di action fetchBanner')
      axios({
        method: 'GET',
        url: '/customer/banners'
      })
        .then(response => {
          context.commit('FETCH_DATA_BANNERS', response.data)
          console.log(response.data, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<isi banner di action')
        })
    },
    fetchCart (context) {
      console.log('sudah masuk di fetch cart di action')
      axios({
        method: 'GET',
        url: '/carts',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(response => {
          context.commit('FETCH_DATA_CART', response.data)
          console.log(response.data, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<isi cart di action')
        })
    },
    fetchTransaction (context) {
      console.log('sudah masuk ke fetchTransaction')
      axios({
        method: 'GET',
        url: '/carts/history',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(response => {
          context.commit('FETCH_DATA_TRANSACTION', response.data)
          console.log(response.data, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<isi cart transaction di action')
        })
        .catch(err => {
          console.log(err)
        })
    },
    createCart (context, payload) {
      console.log('sudah masuk ke action createCart', payload)
      axios({
        method: 'POST',
        url: '/carts',
        data: {
          ProductId: payload
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(cart => {
          context.dispatch('fetchCart')
          console.log(cart)
          Swal.fire({
            icon: 'success',
            title: 'Succsessfuly Add to Cart'
          })
        })
        .catch(err => {
          console.log(err.response.data)
          Swal.fire({
            icon: 'error',
            title: 'Oops....',
            text: `${err.response.data.message}`
          })
        })
    },
    addQuantity (context, payload) {
      console.log('ini di action addquantity')
      axios({
        method: 'PATCH',
        url: `/carts/addQuantity/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(response => {
          context.dispatch('fetchCart')
          Swal.fire({
            icon: 'success',
            text: 'Update Cart Quantity Success '
          })
        })
        .catch(err => {
          console.log(err.response.data.errors)
          Swal.fire({
            icon: 'error',
            title: 'Oops....',
            text: `${err.response.data.errors}`
          })
        })
    },
    reduceQuantity (context, payload) {
      axios({
        method: 'PATCH',
        url: `/carts/reduceQuantity/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(response => {
          context.dispatch('fetchCart')
          Swal.fire({
            icon: 'success',
            text: 'Update Cart Quantity Success '
          })
        })
        .catch(err => {
          console.log(err.response.data.errors)
          Swal.fire({
            icon: 'error',
            title: 'Oops....',
            text: `${err.response.data.errors}`
          })
        })
    },
    removeCart (context, payload) {
      console.log(payload, 'ini di deleteCart action store')
      Swal.fire({
        title: 'Are you sure?',
        text: 'If you delete this, you cannot recover your data..',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((output) => {
        if (output.isConfirmed) {
          axios({
            method: 'DELETE',
            url: `/carts/${payload}`,
            headers: {
              access_token: localStorage.access_token
            }
          })
            .then(response => {
              context.dispatch('fetchCart')
              Swal.fire({
                icon: 'success',
                title: 'Your Cart Has Been Deleted'
              })
            })
        }
      })
        .catch(err => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'Oopss .......',
            text: `${err.response.data.errors}`
          })
        })
    },
    checkoutCart (context, payload) {
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>sudah masuk di checkout action', payload)
      axios({
        method: 'GET',
        url: '/carts/checkout',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(response => {
          Swal.fire({
            icon: 'success',
            title: 'Succsessfuly Add to Cart'
          })
          router.push({ name: 'Checkout' })
          context.dispatch('fetchCart')
          // context.commit
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
