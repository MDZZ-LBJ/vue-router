class VueRouter {
    constructor(options) {
        this.mode = options.mode
        this.routes = options.routes
    }
}

VueRouter.install = function (Vue) {
    // install 的作用就是将routers实例共享给每个组件
    // 把所有的方法都和组件初始化的时候混合
    Vue.mixin({
        beforeCreate() {
           // 区分父子
        }
    })
}

export default VueRouter