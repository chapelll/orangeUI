<template>
  <div class="collapseItem">
    <div class="title" @click="toggle">{{ title }}</div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrangeCollapseItem",
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
  },
  data() {
    return {
      open: false,
    };
  },
  inject: ["eventBus"],
  mounted() {
    this.eventBus &&
      this.eventBus.$on("update:selected", (names) => {
        if (names.indexOf(this.name) >= 0) {
          this.open = true;
        } else {
          //如果显示的那个实例不是自己
          this.open = false
        }
      });
  },
  methods: {
    toggle() {
      if (this.open) {
        this.eventBus &&
          this.eventBus.$emit("update:removeSelected", this.name);
      } else {
        this.open = true;
        // 显示内容时触发事件
        this.eventBus && this.eventBus.$emit("update:addSelected", this.name);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
.collapseItem {
  > .title {
    cursor: pointer;
    border: 1px solid $grey;
    margin-left: -1px;
    margin-right: -1px;
    margin-top: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    > .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  .content {
    padding: 0 8px;
  }
}
</style>