<template>
<div>
    <Navbar/>
  <div class="container home dflex flex-row justifiy-content-center">
    <h1>Transaction History</h1>
    <div>
      <TransactionCard/>
      </div>
    </div>
</div>

</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import TransactionCard from '@/components/TransactionCard.vue'
// import Banner from '@/components/Banner.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    TransactionCard
    // Banner
  },
  methods: {
  }

}
</script>
