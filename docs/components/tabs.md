# Tabs-标签


### 注意
--- 
使用该组件时，需要引入<span style='color:#3eaf7c;'> Tabs </span>、<span style='color:#3eaf7c;'> TabsHead </span>、<span style='color:#3eaf7c;'> TabsBody </span>、<span style='color:#3eaf7c;'> TabsItem </span>、<span style='color:#3eaf7c;'> TabsPane </span>
五个组件并进行注册。<span style='color:#3eaf7c;'> TabsHead </span>及<span style='color:#3eaf7c;'> TabsBody </span>必须在<span style='color:#3eaf7c;'> Tabs </span>组件的包裹之下，<span style='color:#3eaf7c;'> TabsItem </span>必须在<span style='color:#3eaf7c;'> TabsHead </span>组件的包裹之下，<span style='color:#3eaf7c;'> TabsPane </span>必须在<span style='color:#3eaf7c;'> TabsBody </span>组件的包裹之下。且需要给每个标题(<span style='color:#3eaf7c;'> TabsItem </span>)及相对应的内容(<span style='color:#3eaf7c;'> TabsPane </span>)相同的name。

### 预览
---

<ClientOnly>
   <tabs-demo></tabs-demo>
</ClientOnly>

### 使用方法
---

```vue
<template>
  <div class="tabs-wrapper">
    <o-tabs :selected.sync="selectedTab">
      <o-tabs-head>
        <o-tabs-item name='tab1'>娱乐</o-tabs-item>
        <o-tabs-item name='tab2'>财经</o-tabs-item>
        <o-tabs-item name='tab3'>体育</o-tabs-item>
        <o-tabs-item name='tab4' disabled>
          <o-icon name="buy"></o-icon>购物
        </o-tabs-item>
      </o-tabs-head>
      <o-tabs-body>
        <o-tabs-pane name='tab1'>娱乐新闻</o-tabs-pane>
        <o-tabs-pane name='tab2'>财经咨询</o-tabs-pane>
        <o-tabs-pane name='tab3'>体育报道</o-tabs-pane>
        <o-tabs-pane name='tab4'>购物推荐</o-tabs-pane>
      </o-tabs-body>
    </o-tabs>
  </div>
</template>
```

### 选项
---

#### 1. 设置默认选中状态
你可以在最外层的<span style='color:#3eaf7c;'> Tabs </span>组件上设置<span style='color:#3eaf7c;'> :selected.sync="selectedTab" </span>属性，其中"selectedTab"是你想默认选中的标题的name，你可以在data中进行设置。在这里我的设置为<span style='color:#3eaf7c;'> selectedTab: 'tab1'</span>。

#### 2. 设置无法选中状态
你可以在<span style='color:#3eaf7c;'> TabsItem </span>上设置<span style='color:#3eaf7c;'> disabled </span>属性，这样该标题就无法被选中，其对应的<span style='color:#3eaf7c;'> TabsPane </span>也不会显示。