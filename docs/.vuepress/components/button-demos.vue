<template>
  <div>
    <o-button>默认按钮</o-button>
    <o-button icon="setting">icon按钮</o-button>
    <o-button icon="loading">加载中</o-button>
    <o-button disabled>禁止按钮</o-button>
  </div>
</template>

<script>
import Button from "../../../src/button.vue";

export default {
  components: {
    "o-button": Button,
  },
};
</script>

<style lang="scss" scoped>
</style>