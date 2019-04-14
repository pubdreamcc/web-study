<template>
  <div id="app">
    <p v-for="(item, index) of users" :key="index">我叫{{item.username}},性别{{item.gander}},今年{{item.age}}岁</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  components: {},
  data () {
    return {
      users: []
    }
  },
  mounted () {
    this.GetUser()
  },
  methods: {
    GetUser () {
      axios.get('http://localhost:8080/api').then(res => {
        // let result = res.data
        // this.users = result
        // const result = JSON.parse(res.data)
        const result = res.data.result
        this.users = result
      })
    }
  }
}
</script>
