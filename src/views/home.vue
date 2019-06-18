<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <van-button type="default" @click="test()">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  created() {
    this.init()
  },
  methods: {
    init() {
      console.log('home init')
    },
    test() {
      axios.get('https://www.yanxiaojun617.com/invoice/api/')
        .then(function(response) {
          debugger;
          console.log(response)
        })
        .catch(function(error) {
          console.log(error)
        })

    }
  }
}
</script>
