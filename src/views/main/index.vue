<template>
  <div class="page-main">
    <div class="content">
      <home v-if="activeTab === 'home'" ref="viewBox"></home>
      <about v-if="activeTab === 'about'"></about>
      <contact v-if="activeTab === 'contact'"></contact>
    </div>
    <van-tabbar v-model="activeTab">
      <van-tabbar-item name="contact" icon="phone-o">立即预约</van-tabbar-item>
      <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="about" icon="comment-o">常见问题</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import home from '@/views/main/home'
import about from '@/views/main/about'
import contact from '@/views/main/contact'

export default {
  components: {home, about, contact},
  data() {
    return {
      activeTab: 'home',
      tabBarScrollData: {}
    }
  },
  watch: {
    'activeTab'(to, from) { // 记录tab页的滚动位置
      const scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop)
      this.tabBarScrollData[from] = scrollTop
      setTimeout(() => { // 需要等待页面切换后，再设置滚动高度
        document.documentElement.scrollTop = document.body.scrollTop = this.tabBarScrollData[to] || 0
      }, 0)
    }
  }
}
</script>

<style scoped lang="scss">
.page-main {
  .content {
    margin-bottom: 50px;
  }
}
</style>
