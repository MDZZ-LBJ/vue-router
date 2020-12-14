import install from './install'

class VueRouter {
    constructor(options) {
        this.mode = options.mode
        this.routes = options.routes
        // 根据路径返回组件 映射关系
        createMatcher()
    }
    init(app) { // 路由的初始化
        console.log(app)
    }
}

VueRouter.install = install

export default VueRouter