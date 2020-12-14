import install from './install'
import createMatcher from './create-matcher'

class VueRouter {
    constructor(options) {
        this.mode = options.mode
        // 根据路径返回组件 映射关系 
        // 创建一个匹配器(匹配路由，动态添加)
        this.matcher = createMatcher(options.routes || [])
    }
    init(app) { // 路由的初始化
        
    }
}

VueRouter.install = install

export default VueRouter