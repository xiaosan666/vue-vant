<template>
  <div class="page-app">
    <router-view/>
    <van-tabbar route v-model="activeTab">
      <van-tabbar-item name="home" replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="about" replace to="/about" icon="comment-o">经典案例</van-tabbar-item>
      <van-tabbar-item name="test" replace to="/test" icon="phone-o">电梯加装</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeTab: 0,
    }
  },
  created() {
  }
}
</script>

