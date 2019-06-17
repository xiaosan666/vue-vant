<template>
  <div class="page-app">
    <router-view/>
    <van-tabbar route v-model="activeTab" active-color="#07c160" inactive-color="#000">
      <van-tabbar-item name="home" replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="about" replace to="/about" icon="records">测试测试</van-tabbar-item>
      <van-tabbar-item name="test" replace to="/test" icon="phone-o">联系我们</van-tabbar-item>
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

