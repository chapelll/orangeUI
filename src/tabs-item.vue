<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "OrangeTabsItem",
  inject: ["eventBus"],
  data() {
    return {
      active: false,
    };
  },
  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled,
      };
    },
  },
  created() {
    if (this.eventBus) {
      this.eventBus.$on("update:selected", (name) => {
        // 所有的item都要监听update:selected事件
        if (name === this.name) {
          // 如果发现自己的名字和被选中的名字一样
          this.active = true;
        } else {
          this.active = false;
        }
      });
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: [Number, String],
      required: true,
    },
  },
  methods: {
    onClick() {
      if (this.disabled) { return; }
      this.eventBus && this.eventBus.$emit("update:selected", this.name, this);
      this.$emit('click',this)
      // 当item被点击就触发'修改被选中项事件'，同时将该item的名字和这个item一起传出
    },
  },
};
</script>

<style lang="scss" scoped>
$blue: blue;
$disabled-text-color: grey;
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
  &.active {
    color: blue;
    font-weight: bold;
  }
  &.disabled {
    color: $disabled-text-color;
    cursor: not-allowed;
  }
}
</style>