const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
    // 行为驱动测试 BDD

    it('存在.', () => {
        expect(Button).to.be.ok
    })
    // 测试用例的名字叫做 存在

    it('可以设置icon.', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
        }).$mount()
        const useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
        vm.$destroy()
    })

})