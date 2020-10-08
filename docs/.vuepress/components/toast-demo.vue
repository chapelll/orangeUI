<template>
  <div>
    <o-button @click.native="auto">上方弹出</o-button>
    <o-button @click.native="middle">中间弹出</o-button>
    <o-button @click.native="bottom">下方弹出</o-button>
    <o-button @click.native="notAuto">不自动关闭</o-button>
    <o-button @click.native="callback">传入回调</o-button>
  </div>
</template>

<script>
import Vue from "vue";
import Toast from "../../../src/Toast";
import Button from "../../../src/Button";
import plugin from "../../../src/plugin";

Vue.use(plugin);

export default {
  components: {
    "o-button": Button,
  },
  methods: {
    auto() {
      //$toast的第一个参数是显示的文本 
      this.$toast("上方弹出toast", {});
    },
    middle() {
      this.$toast("中间弹出toast", {
        position: "middle",
      });
    },
    bottom() {
      this.$toast("下方弹出toast", {
        position: "bottom",
      });
    },
    notAuto() {
      this.$toast("不会自动进行关闭", {
        closeButton: {
          text: "点击才关闭", //关闭按钮文本
        },
        autoClose: 999, 
      });
    },
    callback() {
      this.$toast("传入一个回调", {
        closeButton: {
          text: "执行回调", //关闭按钮文本
          callback: () => { 
            alert("我是传入的回调");
          },
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>