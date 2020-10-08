# Collapse-折叠面板

### 注意
---
使用该组件时，你需要引入<span style='color:#3eaf7c;'> Collapse </span>组件和<span style='color:#3eaf7c;'> CollapseItem </span>组件并进行注册。使用时<span style='color:#3eaf7c;'> CollapseItem </span>组件必须在<span style='color:#3eaf7c;'> Collapse </span>组件的包裹下。

### 预览
---

<ClientOnly>
<collapse-demos></collapse-demos>
</ClientOnly>

### 使用方法
---
```vue
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
```

### 选项
---
#### 1. 设置标题及 name
<span style='color:#3eaf7c;'>Collapse </span>组件必须接受两个参数：<span style='color:#3eaf7c;'> title </span>用于显示折叠面板的标题,<span style='color:#3eaf7c;'>name </span>用于用于表示选中的 item。

#### 2. 设置默认开启栏
通过在<span style='color:#3eaf7c;'> Collapse </span>上设置<span style='color:#3eaf7c;'>:selected.sync="selected"</span>可以让相对应的展示栏默认打开(上述示例中的"selected"的值为["1"],因此第一栏会默认打开)。

#### 3. 设置手风琴效果
通过在<span style='color:#3eaf7c;'> Collapse </span>上设置<span style='color:#3eaf7c;'>single</span>可以使折叠面板始终只能打开一栏(上述第二个示例便是手风琴效果的折叠面板)。


