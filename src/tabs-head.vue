<template>
  <div class="tabs-head" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
  </div>
</template>

<script>
export default {
  name: "OrangeTabsHead",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected", (item, vm) => {
      // 每次变更selected时通知head
      let { width, left } = vm.$el.getBoundingClientRect();
      let headLeft =  this.$refs.head.getBoundingClientRect().x
      console.log(width);
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = `${left - headLeft}px`
    });
  },
};
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$bottom-color: #81d2ad;
$border-color: #ddd;
.tabs-head {
  position: relative;
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid $border-color;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid $bottom-color;
    transition: all 350ms;
  }
}
</style>