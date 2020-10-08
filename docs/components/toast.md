# Toast-弹出提示框

### 注意
使用该组件时，你需要引入<span style='color:#3eaf7c;'> Toast </span>组件和<span style='color:#3eaf7c;'> plugin </span>插件，注册组件后再使用 Vue 官方文档中插件的使用方法来使用该插件。
 
### 预览
&nbsp;
<ClientOnly>
  <toast-demo></toast-demo>
</ClientOnly>

### 使用方法

```vue
<template>
  <div>
    <o-button @click.native="auto">上方弹出</o-button>
    <o-button @click.native="middle">中间弹出</o-button>
    <o-button @click.native="bottom">下方弹出</o-button>
    <o-button @click.native="notAuto">不自动关闭</o-button>
    <o-button @click.native="callback">传入回调</o-button>
  </div>
</template>

<script>
import Vue from "vue";
import Toast from "../../../src/Toast";
import Button from "../../../src/Button";
import plugin from "../../../src/plugin";

Vue.use(plugin);

export default {
  components: {
    "o-button": Button,
  },
  methods: {
    auto() {
      //$toast的第一个参数是显示的文本 
      this.$toast("上方弹出toast", {});
    },
    middle() {
      this.$toast("中间弹出toast", {
        position: "middle", // 设置弹出位置
      });
    },
    bottom() {
      this.$toast("下方弹出toast", {
        position: "bottom",
      });
    },
    notAuto() {
      this.$toast("不会自动进行关闭", {
        closeButton: {
          text: "点击才关闭", // 设置关闭按钮文本
        },
        autoClose: 999, // 显示的时间
      });
    },
    callback() {
      this.$toast("传入一个回调", {
        closeButton: {
          text: "执行回调", //  设置关闭按钮文本
          callback: () => { // 传入点击关闭按钮执行的回调
            alert("我是传入的回调");
          },
        },
      });
    },
  },
};
</script>
```

### 选项
---

#### 1. 设置toast文本内容
在使用插件时，可以通过<span style='color:#3eaf7c;'> this.$toast </span>中的第一个参数来传入自己想要显示的文本。

#### 2. 设置toast显示的时间
在使用插件时，可以通过<span style='color:#3eaf7c;'> this.$toast </span>中的第二个参数(它是一个对象)来传入<span style='color:#3eaf7c;'> autoClose:'关闭的时间' </span>来设置toast自动关闭的时间(默认为3秒)。

#### 3. 设置toast弹出的位置
在使用插件时，可以通过<span style='color:#3eaf7c;'> this.$toast </span>中的第二个参数(它是一个对象)来传入
<span style='color:#3eaf7c;'> position:'弹出的位置' </span>来设置toast弹出的位置，支持<span style='color:#3eaf7c;'> top </span><span style='color:#3eaf7c;'> middle </span><span style='color:#3eaf7c;'> bottom </span>三种位置(默认为top)。

#### 4. closeButton 对象
在使用插件时，可以通过<span style='color:#3eaf7c;'> this.$toast </span>中的第二个参数来传入
一个<span style='color:#3eaf7c;'> closeButton </span>对象，它有两个值: <span style='color:#3eaf7c;'> text </span>(用于设置关闭按钮的文本)和<span style='color:#3eaf7c;'> callback </span>(用来传入一个点击关闭按钮后执行的回调)。
