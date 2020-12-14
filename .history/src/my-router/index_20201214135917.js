import install from './install'
import createMatcher from './create-matcher'
import HasHistory from './history/hash'
import Html5History from './history/html5'

class VueRouter {
    constructor(options) {
        this.mode = options.mode
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
        console.log(this.history)
    }
    init(app) { // 路由的初始化
        /* 
        根据路径跳转对应的组件
           跳转的方法transitionTo是共享的 所以放在Base中
           获取路径hash和html5不一样 所以分别定义
           setupListener 
        */
        const history = this.history
        const setupListener = () => {
           history.setupListener()
        }
        this.history.transitionTo(history.getCurrentLocation())
        setupListener()
    }
}

VueRouter.install = install

export default VueRouter