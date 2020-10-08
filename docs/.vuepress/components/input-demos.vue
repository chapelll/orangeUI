<template>
  <div class="input-wrapper">
    <o-input></o-input>
    <o-input readonly></o-input>
    <o-input disabled></o-input>
    <p></p>
    <o-input value="错误信息" error="输入出错"></o-input>
    <p></p>
    <o-input :value="message" @input="inputChange"></o-input>
    <p>value: {{ message }}</p>
  </div>
</template>

<script>
import Input from "../../../src/input.vue";

export default {
  data() {
    return {
      message: "数据的双向绑定",
    };
  },
  methods: {
    inputChange(e) {
      this.message = e;
    },
  },
  components: {
    "o-input": Input,
  },
};
</script>

<style lang="scss" scoped>
</style>