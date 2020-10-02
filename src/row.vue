<template>
  <div class="row" :style="rowStyle" :class="rowClass">
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
    align: {
      type: String,
      validator(value) {
        return ['left','right','center'].includes(value)
      }
    }
  },
  computed: {
    rowStyle() {
      return {
        marginLeft: -this.gutter / 2 + "px",
        marginRight: -this.gutter / 2 + "px",
      };
    },
    rowClass() {
      let align = this.align
      return align && `align-${align}`
    }
  },
  mounted() {
    // 当父组件挂载时，所有的子组件都已经挂载到父亲身上
    // 此时找到各个子组件，将父亲的gutter传给它们
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter;
    });
  },
};
</script> 

<style lang="scss" scoped>
.row {
  display: flex;
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>