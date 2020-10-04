<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "OrangeLayout",
  data() {
    return {
      layoutClass: {
        hasSider: false,
      },
    };
  },
  mounted() {
    //在mounted阶段查看子组件中是否有sider组件
    //有就给这个layout加上hasSider这个类名
    this.$children.forEach((vm) => {
      if (vm.$options.name === "OrangeSider") {
        this.layoutClass.hasSider = true;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &.hasSider {
    flex-direction: row;
  }
}
</style>