# Layout-布局

### 注意
--- 
使用该组件时，需要引入<span style='color:#3eaf7c;'> Layout </span>、<span style='color:#3eaf7c;'> Header </span>、<span style='color:#3eaf7c;'> Content </span>、<span style='color:#3eaf7c;'> Footer </span>、<span style='color:#3eaf7c;'> Sider </span>
五个组件并进行注册。使用时其余四个组件必须在<span style='color:#3eaf7c;'> Layout </span>组件的包裹之下。 

### 预览
---

<ClientOnly>
  <layout-demo></layout-demo>
</ClientOnly>

### 使用方法
---

```vue
<template>
  <div class="wrapper">
    <o-layout>
      <o-header> header </o-header>
      <o-content> content </o-content>
      <o-footer> footer </o-footer>
    </o-layout>
    <br>
    <o-layout>
      <o-header> header </o-header>
      <o-layout>
        <o-sider> sider </o-sider>
        <o-content> content </o-content>
      </o-layout>
      <o-footer> footer </o-footer>
    </o-layout>
    <br>
    <o-layout>
      <o-header>header</o-header>
      <o-layout>
        <o-sider> sider </o-sider>
        <o-layout>
          <o-content> content </o-content>
          <o-footer> footer </o-footer>
        </o-layout>
      </o-layout>
    </o-layout>
  </div>
</template>

<style lang="scss" scoped>
* {box-sizing: border-box;}
$background: #3eaf7c;
$wrapper-top: 10px;
$font-color: white;

.wrapper {
  > .layout {height: 30vh;
    > .header {height: 3em;background: $background;}
    > .content {background: lighten($background, 40%);}
    > .layout {height: 6em;
      > .sider {width: 3em;background: lighten($background, 15%);}
      > .content {background: lighten($background, 40%);}
      > .layout {
        > .content {background: lighten($background, 40%);}
        > .footer {background: $background;}}}
    > .footer {background: $background;}}}
</style>
```
### 选项
---
提供基础布局，样式自定义。



### 组件概述
---
- <span style='color:#3eaf7c;background-color:#F8F8F8'> i-layout </span>：布局容器，其下可嵌套<span style='color:#3eaf7c;'> header </span><span style='color:#3eaf7c;'> content </span><span style='color:#3eaf7c;'> sider </span><span style='color:#3eaf7c;'> footer </span>或<span style='color:#3eaf7c;'> layout </span>本身，可以放在任何父容器中。**注意**: 当你在<span style='color:#3eaf7c;'> layout </span>组件中放入了<span style='color:#3eaf7c;'> sider </span>组件时，<span style='color:#3eaf7c;'> layout </span>的布局会由上下布局转变为左右布局。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> i-header </span>：顶部布局，其下可嵌套任何元素，只能放在<span style='color:#3eaf7c;'> layout </span>中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> i-sider </span>：侧边栏，其下可嵌套任何元素，只能放在<span style='color:#3eaf7c;'> layout </span>中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> i-content </span>：内容部分，其下可嵌套任何元素，只能放在<span style='color:#3eaf7c;'> layout </span>中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> i-footer </span>：底部布局，其下可嵌套任何元素，只能放在<span style='color:#3eaf7c;'> layout </span>中。
