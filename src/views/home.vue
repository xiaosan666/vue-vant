<template>
  <div class="page-home">
    <img src="../assets/banner.jpg" alt="" class="banner">
    <div class="business">
      <h2 class="class-title">主营业务</h2>
      <div class="class-hr"></div>
      <div>拥有专业的施工团队，服务行业20载</div>
      <div class="row">
        <div class="item">
          <img src="https://image-c.weimobwmc.com/saas-wxbiz/c121a6c4e7494727808ce679d792c5c9.jpg" alt="">
          <div class="title">
            <van-icon name="medel-o"/>
            电梯安装与保养
          </div>
        </div>
        <div class="item">
          <img src="https://image-c.weimobwmc.com/saas-wxbiz/0216d5d407b64aa685a55b4daf41e9c7.jpg" alt="">
          <div class="title">
            <van-icon name="medel-o"/>
            老旧电梯维修改造
          </div>
        </div>
      </div>
      <div class="row">
        <div class="item">
          <img src="https://image-c.weimobwmc.com/saas-wxbiz/81f4fb0762074edda463d27e0b7631e7.jpg" alt="">
          <div class="title">
            <van-icon name="medel-o"/>
            电梯零配件销售
          </div>
        </div>
        <div class="item">
          <img src="https://image-c.weimobwmc.com/saas-wxbiz/2b2fa9a8c1884b55ace0a67161dec38b.jpg" alt="">
          <div class="title">
            <van-icon name="medel-o"/>
            立体停车库
          </div>
        </div>
      </div>
    </div>
    <div class="contact">
      <h2 class="class-title">联系我们</h2>
      <div class="class-hr"></div>
      <img class="map"
           src="https://restapi.amap.com/v3/staticmap?location=116.481485,39.990464&zoom=10&size=200*100&scale=2&markers=mid,,A:116.481485,39.990464&key=f1b39c6dee0bdf4aa389b0b8e2c0d45c"
           alt="">
      <div class="detail">
        <van-row>
          <van-col span="6" class="img-warp"><img src="../assets/code.png" alt=""></van-col>
          <van-col span="18" class="detail">
            <div>电话：18688498342</div>
            <div>邮箱：yanxiaojun617@163.com</div>
            <div>地址：广州市天河区车陂北门大街1号</div>
          </van-col>
        </van-row>
        <div class="keep-record">
          <div>©signsinet.com.All rights reserved</div>
          <div>普思科技集团 粤ICP备19112868号</div>
        </div>
      </div>
    </div>
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
          debugger
          console.log(response)
        })
        .catch(function(error) {
          console.log(error)
        })

    }
  }
}
</script>
<style lang="scss">
.page-home {
  color: #333;
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
  .business {
    text-align: center;
    .row {
      display: flex;
      margin: 5px;
      .item {
        margin: 5px;
        width: 100%;
        img {
          width: 100%;
          height: 120px;
          object-fit: cover;
        }
        .title {
          text-align: center;
          margin-top: -30px;
          line-height: 30px;
          color: #fff;
          position: relative;
          background-color: rgba(0, 0, 0, 0.6);
          .van-icon {
            color: gold;
            font-size: 20px;
            vertical-align: text-top;
          }
        }
      }
    }
  }
  .contact {
    .map {
      width: 100%
    }
    .detail {
      color: #8f98a1;
      line-height: 26px;
      background: #091d2e;
      padding: 8px 0;
      .img-warp {
        padding: 5px;
      }
      img {
        width: 100%;
        height: 100%;
      }
      .keep-record {
        color: #425769;
        text-align: center;
        border-top: 1px solid;
        margin: 6px 0
      }
    }
  }
}
</style>
