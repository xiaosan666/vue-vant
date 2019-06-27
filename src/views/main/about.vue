<template>
  <div class="page-about">
    <img src="../../assets/banner.jpg" alt="" class="banner">
    <van-cell-group>
      <van-cell @click="toDetail" title="问：旧楼加装电梯的相关政策文件有哪些？" is-link/>
      <van-cell @click="toDetail" title="问：申请旧楼加装电梯规划许可的提出方式是什么？ " is-link/>
      <van-cell @click="toDetail" title="问：申请加装电梯规划许可需要什么材料？ " is-link/>
      <van-cell @click="toDetail" title="问：什么叫做取得“双三分之二”业主的同意？ " is-link/>
      <van-cell @click="toDetail" title="问：某户业主去世，其配偶或子女同意加装电梯，这种情况下应该怎么办？ " is-link/>
      <van-cell @click="toDetail" title="问：一个产权证夫妻两人共有，计算“双三分之二”人数算1人还是算2人？ " is-link/>
      <van-cell @click="toDetail" title="问：同一单元梯间内，某（或多人）相同业主拥有2套房产，“双三分之二”人数算1人还是算2人？ " is-link/>
      <van-cell @click="toDetail" title="问：由于审批部门认为方案需要修改完善，受委托的业主代表修改了方案后，还需要重新签名确认吗？ " is-link/>
      <van-cell @click="toDetail" title="问：为什么要进行批前公示？有什么要求？ " is-link/>
      <van-cell @click="toDetail" title="问：公示的内容是什么？ " is-link/>
      <van-cell @click="toDetail" title="问：批前公示期间如果有人提出反对意见，申请方业主应该怎么做？如果自行协商存在困难怎么办？" is-link/>
      <van-cell @click="toDetail" title="问：不属于严重遮挡的隔壁栋楼提出反对，双方协商不了，怎么办？" is-link/>
      <van-cell @click="toDetail" title="问：如增设电梯位置超出了自身的用地权属红线，方案能否获批？ " is-link/>
      <van-cell @click="toDetail" title="问：如增设电梯位置超出了自身的用地权属红线，方案能否获批？ " is-link/>
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  created() {
  },
  methods: {
    toDetail() {
      this.$router.push('/about/detail')
    }
  }
}
</script>
<style scoped lang="scss">
.page-about {
  .banner {
    width: 100%;
  }
}
</style>

