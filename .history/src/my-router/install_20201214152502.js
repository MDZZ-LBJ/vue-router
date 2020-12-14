export let _Vue;

// 只是将这个router实例挂载到每个组件上
const install = function (Vue) {
    _Vue = Vue;
    // install 的作用就是将routers实例共享给每个组件
    // 把所有的方法都和组件初始化的时候混合
    Vue.mixin({
        beforeCreate() {
            // console.log(this.$options.name)
            // 区分父子关系 先找到父亲 儿子找父亲的属性 孙子找父亲的
            if (this.$options.router) {
                this._routerRoot = this //将根实例放到 _routerRoot 上
                this._router = this.$options.router // mian.js 中的router实例
                this._router.init(this)
            } else {
                // 将根属性全部增加到每个组件上的_routerRoot上
                // 所有组件都可以获取_routerRoot._router获取路由实例
                this._routerRoot = this.$parent && this.$parent._routerRoot
            }
        }
    })
}

export   install

/*
    export let a = 1;
    setInterval(()=> a++ ,1000)
    这样外面 import { a } from './xx.js'
    拿到的a也是一直在变的 因为导出的不是一个引用地址 并且import是动态导入的
    而是一个接口 这就是为什么下面的写法不对

    错误写法 导出的并不是一个对象 是一个接口
    export  {
            a:1,
            b:2
    }

    正确写法：这样写并不是因为简写的原因
        let a = 1;
        let b = 2;
        export {
            a,
            b
        }

    或者
        export default {
            a:1,
            b:2
        }

*/