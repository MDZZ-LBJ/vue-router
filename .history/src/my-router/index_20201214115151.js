import install from './install'
import createMatcher from './create-matcher'

class VueRouter {
    constructor(options) {
        this.mode = options.mode
        // 创建一个匹配器(核心：1.路由匹配组件，动态添加)
        this.matcher = createMatcher(options.routes || [])
    }
    init(app) { // 路由的初始化
        
    }
}

VueRouter.install = install

export default VueRouter