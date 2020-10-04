<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>
 
<script>
export default {
  name: "OrangeToast",
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0,0,0,0.75);
.toast {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: $font-size;
  line-height: 1.8;
  height: $toast-height;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3 0 rgba(0,0,0,0.50);
  color: white;
  padding: 16px;
}
</style>