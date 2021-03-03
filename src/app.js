import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('qdd-button', Button)
Vue.component('qdd-icon', Icon)
Vue.component('qdd-button-group', ButtonGroup)

new Vue({
    el: '#app',
    data() {
        return {
            loading1: false
        }
    }
})