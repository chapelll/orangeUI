<template>
  <button :class="`g-button`">
    <g-icon :class="icon" v-if="icon" :name="icon"></g-icon>
    <slot></slot>
  </button>
</template>

<script>
import Icon from './icon.vue'
export default {
  components: {
    'g-icon': Icon
  },
  props: ["icon"],
};
</script>

<style lang="scss">
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
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--button-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
    cursor: pointer;
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  .loading {
    animation: spin 1.75s infinite linear;
  }
}
</style>

