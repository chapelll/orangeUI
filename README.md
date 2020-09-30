# 橘子UI - 使用Vue搭建的UI组件库

[![Build Status](https://www.travis-ci.org/chapelll/orangeUI.svg?branch=master)](https://www.travis-ci.org/chapelll/orangeUI)

作者: chapelll

## 介绍

这是我在学习 Vue 过程中做的一个 UI组件库，希望对你有用

## 开始使用

1.添加 CSS 样式
    使用前请在CSS中设置 border-box
    ```
    *,*::before,*::after { box-sizing: border-box; }
    ```
    你还需要设置颜色等默认变量
    ```
    :root {
        --font-size: 14px;
        --button-height: 32px;
        --button-bg: white;
        --button-active-bg: #eee;
        --button-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
        }
    ```
    该组件库支持IE15以上的浏览器版本

2.安装 orangeUI
    ```
    npm i --save orangeui-test-1
    ```

3.引入 orangeui
    ```
    import { Button, Icon } from "orangeui-test-1";
    import "orangeui-test-1/dist/index.css";

    export default {
    name: "App",
    components: {
        "g-button": Button,
        "g-icon": Icon,
    }
    }
    ```

4.引入 svg symbols
    ```
    

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

