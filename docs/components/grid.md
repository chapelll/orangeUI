# Grid-栅格


### 注意
--- 
使用该组件时，需要引入<span style='color:#3eaf7c;'> Col </span>与 <span style='color:#3eaf7c;'> Row </span>两个组件并进行注册,使用时<span style='color:#3eaf7c;'> Col </span>组件必须在<span style='color:#3eaf7c;'> Row </span>组件的包裹下。   

### 预览
---

<ClientOnly>
  <grid-demo></grid-demo>
</ClientOnly>

### 使用方法
---

```vue
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
<style lang="scss" scoped>
* { box-sizing: border-box; }
$background: #3eaf7c;
$wrapper-top: 10px;
$font-color: white;

.grid-wrapper {
  > .row { padding: 0.2em;
    > .item {text-align: center;color: $font-color;
      &:nth-child(odd) {background: $background;}
      &:nth-child(even) {background: lighten($background, 20%);color: $font-color;}
    }
  }
}
</style>
```
### 选项
---

#### 1. 设置span(每个col所占份数)
通过给 col 设置<span style='color:#3eaf7c;background-color:#F8F8F8'> span </span>属性, 可以让每一个 col 拥有自己的宽度，宽度比例为 span / 24。请保证每个 row 中的所有 col 的 span 相加的和等于24。

#### 2. 设置offset(col的偏移量)
通过给 col 设置<span style='color:#3eaf7c;background-color:#F8F8F8'> offset </span>属性, 可以使 col 向右移动一定距离，距离比例为 offset / 24。如果你设置了 offset ，请保证每个 row 中的所有 col 的 span 与 offset 相加的和等于24。
 
#### 3. 设置gutter(col之间的间隙)
通过给 row 设置<span style='color:#3eaf7c;background-color:#F8F8F8'> gutter </span>属性, 可以使该 row 下的所有 col 间都有一个间隙，间隙的大小为你设置的 <span style='color:#3eaf7c;background-color:#F8F8F8'> gutter </span>的值，单位是px。

设置gutter后的预览:
<ClientOnly>
  <gutter-demo></gutter-demo>
</ClientOnly>


设置gutter的代码:

```vue
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

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
$background: #3eaf7c;
$wrapper-top: 10px;
$font-color: white;

.gutter-wrapper {
  padding-top: $wrapper-top;
  .item {text-align: center;color: $font-color;
    > span {display: block;background: $background;}}}
</style>
```

#### 4. 支持响应式(phone、ipad、pc)
支持<span style='color:#3eaf7c;'> phone </span> 、<span style='color:#3eaf7c;'> ipad </span> 、<span style='color:#3eaf7c;'> pc </span> 三种设备的响应式设置(默认为<span style='color:#3eaf7c;'> phone </span>)。
可以在 col 上设置<span style='color:#3eaf7c;'> ipad </span>属性及<span style='color:#3eaf7c;'> pc </span>属性来让它们在不同宽度的设备上展示不同的宽度比例。

代码示例:
```vue
<template>
  <div class="response-wrapper">
    <o-row class="row">
      <o-col class="item" span="12" :ipad="{span:8}" :pc="{span: 2}">col</o-col>
      <o-col class="item" span="12" :ipad="{span:16}" :pc="{span: 20,offset:2}">col</o-col>
    </o-row>
  </div>
</template>
```
代码释意:

上述两个col在<span style='color:#3eaf7c;'> phone </span>端上每个都占12/24份，即二分之一。

在<span style='color:#3eaf7c;'> ipad </span>端上，第一个col占8/24份，第二个col占16/24份。

在<span style='color:#3eaf7c;'> pc </span>端上，第一个col占2/24份，第二个col占20/24份且具有2/24的偏移量。