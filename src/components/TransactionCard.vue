<template>
<div class="transaction">
    <div class="row">
      <div class="col-md-12">
        <div class="container d-flex flex-column justify-content-center align-items-center">
          <b-card no-body class="overflow-hidden shadow-lg mb-3" style="max-width: 540px;" v-for="Transaction in Transactions" :key="Transaction.id">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img :src="Transaction.Product.img_url"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body :title="Transaction.Product.name">
                  <b-card-text>
                    <p>Rp {{Transaction.Product.price}} X {{Transaction.quantity}}</p>
                  </b-card-text>
                  <b-card-text>
                    <h5> Total Price: Rp {{Transaction.Product.price * Transaction.quantity}}</h5>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  methods: {
    fetchTransaction () {
      this.$store.dispatch('fetchTransaction')
    }
  },
  computed: {
    Transactions () {
      return this.$store.state.allTransaction
    }
  },
  created () {
    this.fetchTransaction()
  }

}
</script>

<style>

</style>
