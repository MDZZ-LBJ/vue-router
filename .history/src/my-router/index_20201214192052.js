import { install, _Vue } from './install'
import createMatcher from './create-matcher'
import HasHistory from './history/hash'
import Html5History from './history/html5'

class VueRouter {
    constructor(options) {
        this.mode = options.mode
        this.beforeEachHooks = []
        // 创建一个匹配器(核心：1.路由匹配组件 2.动态添加)
        this.matcher = createMatcher(options.routes || [])
        switch (this.mode) {
            // this 是router实例
            case 'hash':
                this.history = new HasHistory(this)
                break;
            case 'history':
                this.history = new Html5History(this)
                break;
        }
    }
    match(location) {
        return this.matcher.match(location)
    }
    push(location) {
        this.history.push(location)
    }
    // vue-router 的路由守卫 核心就是把所有方法组合成一个数组 依次调用
    beforeEach(fn) {
        this.beforeEachHooks.push(fn)
    }
    init(app) { // 路由的初始化
        /* 
        根据路径跳转对应的组件
           跳转的方法transitionTo是共享的 所以放在Base中
           获取路径 和 监控路径变化 hash和html5不一样 所以分别定义
        */
        const history = this.history
        const setupListener = () => { // 监控路径变化
            history.setupListener()
        }
        history.transitionTo(history.getCurrentLocation(), setupListener)
        history.listen((route) => {
            app._route = route
        })
    }

}

VueRouter.install = install

export default VueRouter