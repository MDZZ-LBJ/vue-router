import install from './install'

class VueRouter {
    constructor(options) {
        this.mode = options.mode
        // 根据路径返回组件 映射关系 
        // 创建一个
        createMatcher(options.routes || [])
    }
    init(app) { // 路由的初始化
        console.log(app)
    }
}

VueRouter.install = install

export default VueRouter