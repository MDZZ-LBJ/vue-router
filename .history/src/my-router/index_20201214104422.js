class VueRouter {
    constructor(options) {
        this.mode = options.mode
        this.routes = options.routes
    }
}

VueRouter.install = function (Vue) {
   // install 的作用就是将routers实例共享给每个组件
   // 把所有的方法
   vue.mixin({

   })
}

export default VueRouter