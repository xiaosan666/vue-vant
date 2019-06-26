<template>
  <div class="page-home">
    <img src="../assets/banner.jpg" alt="" class="banner">
    <div class="business">
      <h2 class="class-title">主营业务</h2>
      <div class="class-hr"></div>
      <div>拥有专业的施工团队，服务行业20载</div>
      <div class="row">
        <div class="item" @click="href('https://mp.weixin.qq.com/s/b2xD4QvHcgESVU_TGxCU-A')">
          <img src="https://image-c.weimobwmc.com/saas-wxbiz/c121a6c4e7494727808ce679d792c5c9.jpg" alt="">
          <div class="title">
            <van-icon name="medel-o"/>
            电梯安装与保养
          </div>
        </div>
        <div class="item" @click="href('https://mp.weixin.qq.com/s/sIIMDfIki3buq2cHO9Zv5g')">
          <img src="https://image-c.weimobwmc.com/saas-wxbiz/0216d5d407b64aa685a55b4daf41e9c7.jpg" alt="">
          <div class="title">
            <van-icon name="medel-o"/>
            老旧电梯维修改造
          </div>
        </div>
      </div>
      <div class="row">
        <div class="item" @click="href('https://mp.weixin.qq.com/s/Va_7Y2Z4xhh5dIQzfB4rEw')">
          <img src="https://image-c.weimobwmc.com/saas-wxbiz/81f4fb0762074edda463d27e0b7631e7.jpg" alt="">
          <div class="title">
            <van-icon name="medel-o"/>
            电梯零配件销售
          </div>
        </div>
        <div class="item" @click="href('https://mp.weixin.qq.com/s/oMTwAgGodCSHDrMKeRugIA')">
          <img src="https://image-c.weimobwmc.com/saas-wxbiz/2b2fa9a8c1884b55ace0a67161dec38b.jpg" alt="">
          <div class="title">
            <van-icon name="medel-o"/>
            停车库改造
          </div>
        </div>
      </div>
    </div>
    <div class="about">
      <h2 class="class-title">了解更多</h2>
      <div class="class-hr"></div>
      <van-row>
        <van-col span="8" @click.native="href('https://mp.weixin.qq.com/s/Ipxqkkecg2xvg6B96UJ2Yg')">
          <div class="icon"><i class="iconfont icon-company"></i></div>
          <div class="name">公司简介</div>
        </van-col>
        <van-col span="8" @click.native="href('https://mp.weixin.qq.com/s/16Z5q3fOZGbzyPByCHjnvQ')">
          <div class="icon"><i class="iconfont icon-elevator"></i></div>
          <div class="name">产品介绍</div>
        </van-col>
        <van-col span="8" @click.native="href('https://mp.weixin.qq.com/s/LGyM7prvNGgVMmpLHeZQVg')">
          <div class="icon"><i class="iconfont icon-start"></i></div>
          <div class="name">经典项目</div>
        </van-col>
        <van-col span="8"
                 @click.native="href('https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIyMTY1ODMwOQ==#wechat_redirect')">
          <div class="icon"><i class="iconfont icon-news"></i></div>
          <div class="name">新闻快递</div>
        </van-col>
        <van-col span="8" @click.native="href('https://mp.weixin.qq.com/s/G6HzPxHRj8Dj4uf4jwvCGQ')">
          <div class="icon"><i class="iconfont icon-honor"></i></div>
          <div class="name">公司荣誉</div>
        </van-col>
        <van-col span="8" @click.native="href('https://mp.weixin.qq.com/s/W5JndNKD-T_7uT6ZLSl6hQ')">
          <div class="icon"><i class="iconfont icon-ecruit"></i></div>
          <div class="name">招纳贤士</div>
        </van-col>
      </van-row>
    </div>
    <div class="contact">
      <h2 class="class-title">联系我们</h2>
      <div class="class-hr"></div>
      <img class="map"
           src="https://restapi.amap.com/v3/staticmap?location=108.351966,22.778316&zoom=10&size=200*100&scale=2&markers=mid,,A:108.351966,22.778316&key=f1b39c6dee0bdf4aa389b0b8e2c0d45c"
           alt="">
      <div class="detail">
        <van-row>
          <van-col span="6" class="img-warp"><img src="../assets/code.png" alt=""></van-col>
          <van-col span="18" class="detail">
            <div>电话：0771-5331166</div>
            <div>邮箱：yanxiaojun617@163.com</div>
            <div>地址：南宁市青秀区英华路9号</div>
          </van-col>
        </van-row>
        <div class="keep-record">
          <div>©signsinet.com.All rights reserved</div>
          <div>普思科技集团 粤ICP备19112868号</div>
        </div>
      </div>
    </div>
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
    href(url) {
      console.log(url)
      window.location.href = url
    },
    test() {
      axios.get('https://www.yanxiaojun617.com/invoice/api/')
        .then(function(response) {
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
  .about {
    .van-col {
      text-align: center;
      margin: 5px 0;
      .icon {
        margin: 0 auto;
        width: 80px;
        height: 80px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #07c160;
        color: #fff;
      }
      .iconfont {
        font-size: 40px;
      }
    }
  }
  .contact {
    margin-bottom: 50px;
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
