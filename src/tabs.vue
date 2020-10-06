<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "OrangeTabs",
  props: {
    selected: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      eventBus: new Vue(),
      // 定义总线eventBus，它是一个Vue生成的实例
    };
  },
  mounted() {
    if (this.$children.length === 0) {
      console && console.warn && 
      console.warn('tabs的子组件应该是tabs-head和tabs-body,但你没有写子组件');
    }
    this.$children.forEach((vm) => {
      if (vm.$options.name === "OrangeTabsHead") {
        vm.$children.forEach((childVm) => {
          if (
            childVm.$options.name === "OrangeTabsItem" &&
            childVm.name === this.selected
          ) {
            this.eventBus.$emit("update:selected", this.selected, childVm);
            // 当tabs挂载时就会向外触发事件，告知其它组件selected的值和被选中的这一个组件 (只会触发进入页面的这一次)
          }
        });
      }
    });

    
  },
  provide() {
    // 使用provide定义的属性，所有子孙后代都可以使用inject来获取
    return {
      eventBus: this.eventBus,
      // 把自己定义的eventBus提供出去
    };
  },
};
</script>

<style lang="scss" scoped>
.tabs {
}
</style>