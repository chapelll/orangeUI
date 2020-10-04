const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {

    it('存在.', () => {
        expect(Toast).to.exist
        // 期待Toast组件是存在的
    })

    describe('props', function () {
        // 描述toast具有接收值的功能

        it('接收 autoClose', (done) => {
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: 1,
                }
            }).$mount(div)
            setTimeout(()=>{
                // 我期待1.5秒之后body里没有这个元素
                expect(document.body.contains(vm.$el)).to.eq(false)
                done() // 关闭测试
            },1500)
        })
        it('接收 closeButton', () => {
            const callback = sinon.fake()
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: '关闭吧',
                        callback,
                    }
                }
            }).$mount()
            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('关闭吧')
            closeButton.click()
            expect(callback).to.have.been.called
        })
        it('接收 position', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    position: 'bottom'
                }
            }).$mount()
           expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
        })
    })

})
