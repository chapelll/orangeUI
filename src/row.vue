<template>
  <div
    class="row"
    :style="{ marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px' }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "OrangeRow",
  props: {
    gutter: {
      type: [Number, String],
    },
  },
  mounted() {
    // 当父组件挂载时，所有的子组件都已经挂载到父亲身上
    // 此时找到各个子组件，将父亲的gutter传给它们
    this.$children.forEach((vm)=>{
      vm.gutter = this.gutter
    })
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
</style>