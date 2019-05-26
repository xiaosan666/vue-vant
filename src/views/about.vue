<template>
  <div class="page-about">
    about
  </div>
</template>
<script>
export default {
  name: 'about',
  data() {
    return {
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      console.log('init: about');
    }
  }
};
</script>
<style lang="scss">
.page-about {

}
</style>

