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

new Vue({
    el: '#app',
    methods: {
        inputChange(e) {
            this.message = e
        }
    },
    data() {
        return {
            message: '支持双向数据绑定'
        }
    }
})
