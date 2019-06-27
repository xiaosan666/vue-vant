<template>
  <div class="page-404">
    404:页面找不到
    <van-button block round type="primary" @click="$router.go(-1)">返回</van-button>
  </div>
</template>
<style scoped lang="scss">
.page-404 {
  .content {
    margin: 16px;
  }
}
</style>

