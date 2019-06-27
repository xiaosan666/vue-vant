```

<template>
  <div class="page-${COMPONENT_NAME}">
    ${COMPONENT_NAME}#[[$END$]]#
  </div>
</template>
<script>
export default {
  name: '${COMPONENT_NAME}',
  data() {
    return {
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      console.log('init: ${COMPONENT_NAME}');
    }
  }
};
</script>
<style scoped lang="scss">
.page-${COMPONENT_NAME} {

}
</style>


```

