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

<script>
import Layout from "../../../src/Layout";
import Header from "../../../src/Header";
import Sider from "../../../src/Sider";
import Content from "../../../src/Content";
import Footer from "../../../src/Footer";

export default {
  components: {
    "o-layout": Layout,
    "o-header": Header,
    "o-sider": Sider,
    "o-content": Content,
    "o-footer": Footer,
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

.wrapper {
  > .layout {
    height: 30vh;
    > .header {
      height: 3em;
      background: $background;
    }
    > .content {
      background: lighten($background, 40%);
    }
    > .layout {
      height: 6em;
      > .sider {
        width: 3em;
        background: lighten($background, 15%);
      }
      > .content {
        background: lighten($background, 40%);
      }
      > .layout {
        > .content {
          background: lighten($background, 40%);
        }
        > .footer {
          background: $background;
        }
      }
    }
    > .footer {
      background: $background;
    }
  }
}
</style>