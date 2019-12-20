<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div>
        <button class="btn-refresh" @click="refresh()">Refresh</button>
      </div>

      <User
        v-for="(user, index) in users"
        :key="index" 
        :name="user.name" 
        :age="user.age"
        :department="user.department"
        :color="index % 2 == 0 ? 'genap' : 'ganjil'" />

      <div>
        <router-link to="/about"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import User from '../components/User.vue'

export default {
  name: 'home',
  components: {
    User
  },
  data: () => ({
    users: [],
    loading: true
  }),
  methods: {
    fetch() {
      this.loading = true
      axios.get('http://localhost:3000/api/users', {
        headers: {
          'Tokennya': 'abcxyz'
        }
      })
      .then(response => {
        this.users = response.data.data
        this.loading = false
      })
      .catch(err => console.log(err))
    },
    refresh() {
      this.fetch()
    }
  },
  mounted() {
    this.fetch()
  }
}
</script>

<style scoped>
  .btn-refresh {
    background-color: green;
    color: white;
  }
</style>
