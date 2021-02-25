<template>
    <nav
    class="navbar navbar-expand-lg navbar-light shadow-lg mb-4"
    style="background-color: #f5f6fa"
  >
    <router-link to="/" class="navbar-brand text-dark" style="font-weight: bold">ATRIA PET SHOP</router-link>
    <div class="container-fluid d-flex flex-row justify-content-end">
      <div class="row">
        <div
          class="d-flex flex-column justify-content-sm-evenly align-items-center"
        >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
                <li class="nav-item">
                 <router-link to="/carts"><button type="click" name="button" class="btn login_btn bg-primary text-white mr-2"><i class="fas fa-shopping-cart"></i> {{carts.length}}</button></router-link>
                 </li>
                 <li class="nav-item">
                 <router-link to="/transaction"><button type="click" name="button" class="btn login_btn text-dark mr-2"><i class="fa fa-history" aria-hidden="true"></i></button></router-link>
                 </li>
              <li class="nav-item">
              <button type="click" name="button" @click.prevent="logoutCustomer" v-if="access_token" class="btn login_btn bg-dark text-white">Logout <i class="fas fa-sign-out-alt"></i></button>
              <button type="click" name="button" @click="loginCustomer" v-if="!access_token" class="btn login_btn bg-dark text-white">Login <i class="fas fa-sign-in-alt"></i></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      access_token: localStorage.access_token
    }
  },
  computed: {
    carts () {
      return this.$store.state.allCarts
    }
  },
  methods: {
    logoutCustomer () {
      this.$store.dispatch('logout')
      this.$router.push({ name: 'Home' })
        .catch((err) => {
          console.log('ini di home')
        })
    },
    loginCustomer () {
      this.$router.push({ name: 'Login' })
    }

  }
}
</script>

<style>

</style>
