const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {

    it('存在.', () => {
        expect(Input).to.exist
        // 期待Input组件是存在的
    })

    describe('props', () => {
        const Constructor = Vue.extend(Input)
        // 借助Vue生成一个Input的构造函数
        let vm
        afterEach(()=>{
            vm.$destroy()
        })
        it('接收value.', () => {
            vm = new Constructor({
                propsData: {
                    value: '123456'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('123456')
        })

        it('接收disabled.', () => {
            vm = new Constructor({
                propsData: {
                    disabled: 'disabled'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
            // 期待inputElement的disabled这个属性是存在的
        })

        it('接收readonly.', () => {
            vm = new Constructor({
                propsData: {
                    readonly: 'readonly'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
            // 期待inputElement的readonly这个属性是存在的
        })

        it('接收error.', () => {
            vm = new Constructor({
                propsData: {
                    error: '错误信息'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            const errorMessageElement = vm.$el.querySelector('.errorMessage')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            expect(errorMessageElement.innerHTML).to.equal('错误信息')
            // 期待错误输入框后面的 提示svg的名字为  'i-error'
            // 期待错误输入框后面的 span里面的文字为 '错误信息'
        })
    })

    describe('事件',()=>{
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(()=>{
            vm.$destroy()
        })

        it('支持change/input/focus/blur事件.', () => {
            ['change','input','focus','change'].forEach((eventName)=>{
                vm = new Constructor({}).$mount()
                const callback = sinon.fake(); 
                //定义一个回调函数
                vm.$on(eventName,callback) 
                //该input触发eventName事件时，传一个callback
                let event = new Event(eventName) 
                //定义eventName的事件
                Object.defineProperty(
                    event,'target',{
                        value: {value: 'hi'}, enumerable: true
                    }
                )
                //给该事件增加target的value属性，其值为hi
                let inputElement = vm.$el.querySelector('input')
                //获取到该input输入框
                inputElement.dispatchEvent(event)
                //该input输入框去触发event事件
                expect(callback).to.have.been.calledWith('hi')
                //期待回调被调用且参数为这个event事件
            })
        })
    })

})