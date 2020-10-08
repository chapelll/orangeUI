<template>
  <div class="gutter-wrapper">
    <o-row gutter="30">
      <o-col class="item" span="8"> <span> col-8; gutter-30;</span> </o-col>
      <o-col class="item" span="8"> <span> col-8; gutter-30;</span> </o-col>
      <o-col class="item" span="8"> <span> col-8; gutter-30;</span> </o-col>
    </o-row>
    <o-row gutter="20">
      <o-col class="item" span="8"> <span> col-8; gutter-20;</span> </o-col>
      <o-col class="item" span="8"> <span> col-8; gutter-20;</span> </o-col>
      <o-col class="item" span="8"> <span> col-8; gutter-20;</span> </o-col>
    </o-row>
    <o-row gutter="10">
      <o-col class="item" span="8"> <span> col-8; gutter-10;</span> </o-col>
      <o-col class="item" span="8"> <span> col-8; gutter-10;</span> </o-col>
      <o-col class="item" span="8"> <span> col-8; gutter-10;</span> </o-col>
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

.gutter-wrapper {
  padding-top: $wrapper-top;
  .item {
    text-align: center;
    color: $font-color;
    > span {
      display: block;
      background: $background;
    }
  }
}
</style>