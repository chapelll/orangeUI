# 橘子UI - 使用Vue搭建的UI组件库

[![Build Status](https://www.travis-ci.org/chapelll/orangeUI.svg?branch=master)](https://www.travis-ci.org/chapelll/orangeUI)

作者: chapelll

## 介绍

这是我在学习 Vue 过程中做的一个 UI组件库，希望对你有所帮助。

## 开始使用

1.添加 CSS 样式

使用前请在CSS中设置 border-box

```
*,*::before,*::after { box-sizing: border-box; }
```

该组件库支持IE15以上的浏览器版本

2.安装 orangeUI

```
npm i --save orangeui-test 
```


3.引入 orangeUI

```
import {Button,Icon,Col, Collapse, CollapseItem, Content, Footer, Header, Input, Layout
, Row, Sider, Tabs, TabsHead, TabsBody, TabsItem, TabsPane, Toast,plugin} 
from 'orangeui-test'
import 'orangeui-test/dist/index.css'    
import Vue from 'vue'
Vue.use(plugin)

    export default {
         name: 'app',
         components: {
        'o-button':Button,
        'o-icon':Icon,
        'o-col':Col,
        'o-collapse':Collapse,
        'o-collapse-item':CollapseItem,
        'o-content': Content,
        'o-footer': Footer,
        'o-header': Header,
        'o-input': Input,
        'o-layout': Layout,
        'o-row': Row,
        'o-sider': Sider,
        'o-tabs': Tabs,
        'o-tabs-head': TabsHead,
        'o-tabs-body': TabsBody,
        'o-tabs-item': TabsItem,
        'o-tabs-pane': TabsPane,
        'o-toast': Toast,
 }
}
```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

