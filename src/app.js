import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import Input from './input.vue'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-input', Input)

new Vue({
    el: '#app',
    methods: {
        inputChange(e) {
            console.log(e.target.value);
        }
    }
})
