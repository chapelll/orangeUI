import Toast from './toast.vue'

let currentToast

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            if (currentToast) {
                currentToast.close()
            }
            currentToast = createToast({ Vue, message, propsData: toastOptions })
        }
    }
}
// 开发一个插件(在vue原型上添加$toast)

//
function createToast({ Vue, message, propsData }) {
    let Constructor = Vue.extend(Toast)
    // 将toast组件的构造函数(vue实例)获得
    let toast = new Constructor({ propsData })
    // 生成一个toast实例
    toast.$slots.default = [message]
    // 将传入的信息放在toast组件的slot中
    toast.$mount()
    // toast出现在内存中
    document.body.appendChild(toast.$el)
    // 将toast从内存放到页面上
    return toast
}