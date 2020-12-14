import install from './install'

class VueRouter {
    constructor(options) {
        this.mode = options.mode
        this.routes = options.routes
        
    }
    init(app) { // 路由的初始化
        console.log(options)
    }
}

VueRouter.install = install

export default VueRouter