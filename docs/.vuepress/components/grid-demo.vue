<template>
  <div class="grid-wrapper">
    <o-row class="row">
      <o-col class="item" span="24">col-24</o-col>
    </o-row>
    <o-row>
      <o-col class="item" span="12">col-12</o-col>
      <o-col class="item" span="12">col-12</o-col>
    </o-row>
    <o-row class="row">
      <o-col class="item" span="8">col-8</o-col>
      <o-col class="item" span="8">col-8</o-col>
      <o-col class="item" span="4" offset="4">col-4</o-col>
    </o-row>
    <o-row class="row">
      <o-col class="item" span="6">col-6</o-col>
      <o-col class="item" span="4" offset="2">col-4</o-col>
      <o-col class="item" span="6">col-6</o-col>
      <o-col class="item" span="5" offset="1">col-5</o-col>
    </o-row>
  </div>
</template>

<script>
import Col from "../../../src/Col";
import Row from "../../../src/Row";

export default {
  components: {
    "o-col": Col,
    "o-row": Row,
  },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
$background: #3eaf7c;
$wrapper-top: 10px;
$font-color: white;

.grid-wrapper {
  > .row {
    padding: 0.2em;
    > .item {
      text-align: center;
      color: $font-color;
      &:nth-child(odd) {
        background: $background;
      }
      &:nth-child(even) {
        background: lighten($background, 20%);
        color: $font-color;
      }
    }
  }
}
</style>

