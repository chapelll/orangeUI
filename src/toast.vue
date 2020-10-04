<template>
  <div class="toast" :class="toastClasses">
    <slot></slot>
    <div class="line" v-if="closeButton"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">{{
      closeButton.text
    }}</span>
  </div>
</template>
  
<script>
export default {
  name: "OrangeToast",
  computed: {
    toastClasses() {
      return {[`position-${this.position}`]:true}
    },
  },
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
      type: Number,
      default: 2,
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: "关闭",
          callback: undefined,
        };
      },
    },
    // props传递一个对象时需要使用函数写法
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "middle"].indexOf(value) >= 0;
      },
    },
  },
  methods: {
    close() {
      this.$el.remove();
      // this是当前组件 $el是挂载在页面上的元素
      this.$destroy();
      // 销毁实例
    },
    onClickClose() {
      this.close(); //关闭自己
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        //如果外部传入了closeButton
        this.closeButton.callback(); //调用回调函数
      }
    },
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.autoCloseDelay * 1000);
    }
  },
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  display: flex;
  align-items: center;
  position: fixed;
  left: 50%;
  font-size: $font-size;
  line-height: 1.8;
  min-height: $toast-min-height;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3 0 rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0 16px;
  &.position-top {
    top: 0;
    transform: translateX(-50%);
  }
  &.position-bottom {
    bottom: 0;
    transform: translateX(-50%);
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, 50%);
  }
}
.close {
  // border: 1px solid red;
  margin-left: 16px;
  flex-shrink: 0;
  &:hover {
    cursor: pointer;
  }
}
.line {
  height: 40px;
  border-left: 1px solid #666;
  margin-left: 16px;
}
</style>