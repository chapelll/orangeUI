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
                autoClose: false
            })
        }
    },
    data() {
        return {
            message: '支持双向数据绑定'
        }
    },
})
