<template>
  <div class="tabs-head">
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
      let { width, height, top, left } = vm.$el.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = `${left}px`;
    });
  },
};
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$blue: blue;
.tabs-head {
  position: relative;
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  align-items: center;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid $blue;
    transition: all 350ms;
  }
}
</style>