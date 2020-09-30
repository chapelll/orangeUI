<template>
  <svg class="g-icon" aria-hidden="true">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import "./svg.js";

export default {
  name: "OrangeIcon",
  props: ["name"],
};
</script>

<style lang="scss" scoped>
.g-icon {
  width: 1em;
  height: 1em;
  margin-right: 0.2em;
}
</style>