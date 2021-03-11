import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('qdd-button', Button)
Vue.component('qdd-icon', Icon)
Vue.component('qdd-button-group', ButtonGroup)
Vue.component('qdd-input', Input)

new Vue({
    el: '#app',
    data() {
        return {
            loading1: false
        }
    },
    created(){
        /*setTimeout(()=> {
            const event = new Event('change')
            const inputEl = this.$el.querySelector('input')
            inputEl.dispatchEvent(event)
            console.log(event);
        }, 3000)*/
    },
    methods: {
        inputChange(e){
            console.log(e, e.target.value);
        }
    }
})

import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)

const expect = chai.expect

/*try {
    //单元测试
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting'
            }
        })
        vm.$mount()
        let useElement = vm.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')
        expect(href).to.equal('#i-setting')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting',
                loading: true
            }
        })
        vm.$mount()
        let useElement = vm.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')
        expect(href).to.equal('#i-loading')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting'
            }
        })
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let {order} = window.getComputedStyle(svg)
        expect(order).to.equal('1')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting',
                iconPosition: 'right'
            }
        })
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let {order} = window.getComputedStyle(svg)
        expect(order).to.equal('2')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        //mock
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting'
            }
        })
        vm.$mount()

        let spy = chai.spy(function () {
        })

        vm.$on('click', spy)
        let btn = vm.$el
        btn.click()
        expect(spy).to.have.been.called()
    }
} catch (err) {
    window.errors = [err]
} finally {
    window.errors && window.errors.forEach(error => {
        console.error(error.message)
    })
}*/

