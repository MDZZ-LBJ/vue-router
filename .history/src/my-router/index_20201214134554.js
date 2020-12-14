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
            case 'hash':
                this.history = new HasHistory()
                break;
            case 'history':
                this.history = new Html5History()
                break;
        }
    }
    init(app) { // 路由的初始化

    }
}

VueRouter.install = install

export default VueRouter