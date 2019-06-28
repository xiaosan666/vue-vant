<template>
  <div class="page-404">
    <div>
      <h1>404</h1>
      <h4>We're sorry, but the page you were looking for doesn't exist.</h4>
      <van-button block round type="primary" @click="$router.go(-1)">返回</van-button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.page-404 {
  & > div {
    width: 80%;
    margin: 0 auto;
    h1 {
      text-align: center;
      font-size: 5em;
      font-family: fantasy;
      color: #475669;
    }
    h4 {
      color: #666;
    }
  }
}
</style>
