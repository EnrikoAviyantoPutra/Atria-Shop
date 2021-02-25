<template>
<div>
    <!-- LOGIN -->
    <div id="login" v-if="statusPage==true">
  <section class="login">
    <div class="container full-height d-flex flex-column align-items-end justify-content-center">
      <div class="hero-text">
        <h1>Login</h1>
        <img src="../assets/icon_emoji.png" alt="">
      </div>
      <div class="login-form mt-5 mb-5">
        <form>
          <div class="mb-3">
            <input v-model="email_login" type="text" class="form-control form-custom" placeholder="email"><br>
            <input v-model="password_login" type="password" class="form-control form-custom" placeholder="*****">
          </div>
          <button type="submit" class="btn btn-custom" @click.prevent="login">Login</button>
          <button type="submit" class="btn btn-custom" @click.prevent="registerForm">Sign Up</button>
        </form>
      </div>
    </div>
  </section>
    </div>
  <!-- LOGIN ENDS -->
      <!-- REGISTER -->
    <div id="register" v-if="statusPage==false">
  <section class="register">
    <div class="container full-height d-flex flex-column align-items-end justify-content-center">
      <div class="hero-text">
        <h1>Register</h1>
        <img src="../assets/icon_emoji.png" alt="">
      </div>
      <div class="login-form mt-5 mb-5">
        <form @submit.prevent="login">
          <div class="mb-3">
            <input v-model="email_register" type="text" class="form-control form-custom" placeholder="email"><br>
            <input v-model="password_register" type="password" class="form-control form-custom" placeholder="****">
          </div>
          <button type="submit" class="btn btn-custom" @click.prevent="register">Sign Up</button>
        </form>
      </div>
    </div>
  </section>
    </div>
  <!-- REGISTER END -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      email_login: '',
      password_login: '',
      email_register: '',
      password_register: '',
      statusPage: true

    }
  },
  methods: {
    registerForm () {
      this.statusPage = false
    },
    register () {
      const customerData = {
        email: this.email_register,
        password: this.password_register
      }
      this.$store.dispatch('registerCustomer', customerData)
      this.statusPage = true
    },
    login () {
      const loginData = {
        email: this.email_login,
        password: this.password_login
      }
      this.$store.dispatch('loginCustomer', loginData)
    }

  }

}
</script>

<style scope>

</style>
