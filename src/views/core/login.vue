<template>
  <div class="login">
    <van-button type="primary" @click="login">主要按钮</van-button>
  </div>
</template>

<script>

export default {
  methods: {
    login() {
      alert(10);
    }
  }
};
</script>
