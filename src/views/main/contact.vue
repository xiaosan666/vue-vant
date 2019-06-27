<template>
  <div class="page-contact">
    <img src="../../assets/banner.jpg" alt="" class="banner">
    <h2 class="class-title">现在预约</h2>
    <div class="class-hr"></div>
    <div class="tip">现对有意向加装电梯的小区进行预约征集</div>
    <div class="form">
      <van-cell-group>
        <van-field
          required
          clearable
          label="姓名"
          left-icon="contact"
          placeholder="请输入姓名"
        />
        <van-field
          required
          clearable
          label="电话"
          left-icon="phone-o"
          placeholder="请输入电话"
        />
        <van-field
          clearable
          label="您的位置"
          left-icon="location-o"
          placeholder="您的位置"
        />
        <van-field
          label="小区情况"
          type="textarea"
          left-icon="comment-o"
          placeholder="您可以简单说明小区情况"
          rows="3"
          autosize
        />
      </van-cell-group>
      <div class="submit">
        <van-button block round type="primary" @click="appointment">立即预约</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import { Dialog } from 'vant'

export default {
  data() {
    return {}
  },
  created() {
  },
  methods: {
    appointment() {
      Dialog.alert({
        title: '标题',
        message: '开发中...'
      }).then(() => {
        // on close
      })
    }
  }
}
</script>
<style scoped lang="scss">
.page-contact {
  .banner {
    width: 100%;
  }
  .class-title {
    text-align: center;
    color: #1989fa;
    margin-block-end: 0;
  }
  .class-hr {
    width: 60px;
    border-bottom: 2px solid #1989fa;
    margin: 4px auto;
  }
  .tip {
    text-align: center;
  }
  .form {
    margin: 16px;
  }
  .submit {
    margin: 0 30px
  }
}
</style>

