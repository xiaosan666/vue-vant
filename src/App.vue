<template>
  <div class="page-app">
    <router-view/>
    <van-tabbar route v-model="activeTab" v-if="showTabBar">
      <van-tabbar-item name="home" replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="about" replace to="/about" icon="comment-o">常见问题</van-tabbar-item>
      <van-tabbar-item name="test" replace to="/test" icon="phone-o">立即预约</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeTab: 0,
      showTabBar: true
    }
  },
  watch: {
    '$route'(to, from) {
      const name = to.name
      this.showTabBar = name === 'home' || name === 'about' || name === 'test'
    }
  },
  created() {
  }
}
</script>

