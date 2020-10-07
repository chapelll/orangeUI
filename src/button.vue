<template>
  <button :class="`g-button zcz1`">
    <g-icon :class="icon" v-if="icon" :name="icon"></g-icon>
    <slot></slot>
  </button>
</template>

<script>
import Icon from "./icon.vue";
export default {
  name: "OrangeButton",
  components: {
    "g-icon": Icon,
  },
  props: ["icon"],
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$button-height: 32px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.g-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  vertical-align: middle;
  &:hover {
    border-color: $border-color-hover;
    cursor: pointer;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  &[disabled] {
    cursor: not-allowed;
  }
  .loading {
    animation: spin 1.75s infinite linear;
  }
}
</style>

