<template>
  <transition :name="transitionName">
    <keep-alive>
      <router-view v-if="keepAlive" class="child-view"></router-view>
    </keep-alive>
    <router-view v-if="!keepAlive" class="child-view"></router-view>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      keepAlive: true, // 是否缓存页面，默认true
      transitionName: 'slide-left' // 动画名称
    }
  },
  watch: {
    '$route'(to, from) {
      this.keepAlive = !(this.$route.meta.keepAlive === false)
      // 根据路由切换，改变动画
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  created() {
    console.log(process.env);
  },
  methods: {}
}
</script>
<style scoped lang="scss">
.child-view {
  position: absolute;
  width: 100%;
  transition: all .5s cubic-bezier(.55, 0, .1, 1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(50px, 0);
  transform: translate(50px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-50px, 0);
  transform: translate(-50px, 0);
}
</style>

