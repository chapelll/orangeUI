<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "OrangeTabsPane",
  inject: ["eventBus"],
  data() {
    return {
      active: false,
    };
  },
  props: {
    name: {
      type: [Number, String],
      required: true,
    },
  },
  computed: {
    classes() {
      return {
        active: this.active,
      };
    },
  },
  created() {
    this.eventBus.$on("update:selected", (name) => {
      // 所有的item都要监听update:selected事件
      if (name === this.name) {
        // 如果发现自己的名字和被选中的名字一样
        this.active = true;
      } else {
        this.active = false;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.tabs-pane {
  &.active {
    background: red;
  }
}
</style>