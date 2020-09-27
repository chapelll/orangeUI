import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)

new Vue({
    el: '#app',
})

import chai from 'chai'
const expect = chai.expect

// 单元测试
{
    // 测试按钮含有icon
    let Constructor = Vue.extend(Button)
    let vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-setting')
    vm.$destroy()
}
{
    let Constructor = Vue.extend(Button)
    let vm = new Constructor({
        propsData: {
            icon: 'buy'
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-buy')
    vm.$destroy()
}
{
    let Constructor = Vue.extend(Button)
    let vm = new Constructor({
        propsData: {
            icon: 'good'
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-good')
    vm.$destroy()
}
