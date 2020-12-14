class VueRouter {
    constructor(options) {
        this.mode = options.mode
        this.routes = options.routes
    }
}

VueRouter.install = function (Vue) {
   // install 的作用就是将routers实例
}

export default VueRouter