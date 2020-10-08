<template>
  <div>
    <i-collapse :selected.sync="selected">
      <i-collapse-item title="标题1" name="1">内容1</i-collapse-item>
      <i-collapse-item title="标题2" name="2">内容2</i-collapse-item>
      <i-collapse-item title="标题3" name="3">内容3</i-collapse-item>
    </i-collapse>
    <br>
    <i-collapse :selected.sync="selected" single>
      <i-collapse-item title="标题1" name="1">只会显示1</i-collapse-item>
      <i-collapse-item title="标题2" name="2">只会显示2</i-collapse-item>
      <i-collapse-item title="标题3" name="3">只会显示3</i-collapse-item>
    </i-collapse>
  </div>
</template>

<script>
import Collapse from "../../../src/Collapse";
import CollapseItem from "../../../src/Collapse-item";
export default {
  components: {"i-collapse": Collapse,"i-collapse-item": CollapseItem,},
  data() {return {selected: ["1"]}}};
</script>
