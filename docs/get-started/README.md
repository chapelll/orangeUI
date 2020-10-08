---
title: '快速上手'
---
# 快速上手

## 引入必要资源
```javascript
import { Button } from "orangeui-test";
import "orangeui-test/dist/index.css";
```
注意: 当你使用对应的组件时，请引入并在components中注册它们。

## 注册组件
```javascript
export default {
  name: "ComponentName",
  components: {
    "o-button": Button,
  },
}
```

## 使用
代码：
```vue
<template>
  <div>
    <o-button>默认按钮</o-button>
  </div>
</template>
```
效果：
<ClientOnly>
  <get-started-button-demo></get-started-button-demo>
</ClientOnly>

