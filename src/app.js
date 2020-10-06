import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Footer from './footer.vue'
import Sider from './sider.vue'
import Content from './content.vue'
import Toast from './toast.vue'
import Tabs from './tabs.vue'
import TabsHead from './tabs-head.vue'
import TabsBody from './tabs-body.vue'
import TabsItem from './tabs-item.vue'
import TabsPane from './tabs-pane.vue'


Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-content', Content)
Vue.component('g-toast', Toast)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

import plugin from './plugin.js' //引入插件
Vue.use(plugin) //使用插件

new Vue({
    el: '#app',
    methods: {
        inputChange(e) {
            this.message = e
        },
        showToast() {
            this.$toast('我是toast', {
                closeButton: {
                    text: '关闭我',  //关闭按钮文本
                    callback() {    //关闭时执行的回调函数
                        console.log('回调');
                    }
                },
                position: 'top',
                // autoClose: 3
            })
        },
    },
    data() {
        return {
            message: '支持双向数据绑定',
            selectedTab: 'finance',
        }
    },
})
