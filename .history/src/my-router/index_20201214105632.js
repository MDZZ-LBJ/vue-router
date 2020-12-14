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
            console.log(this.$options.name)
            // 区分父子关系 先找到父亲 儿子找父亲的属性 孙子找父亲的
            if (this.$options.router) {
                //将根实例放到 _routerRoot 上
                this._routerRoot = this
                this._router = this.$options.router // mian.js 中的router
            } else {
                // 将根属性全部增加到每个组件上的_routerRoot上
                // 所有组件都可以获取_routerRoot._router获取路由实例
                this._routerRoot = this.$parent && this.$parent._routerRoot
            }
        }
    })
}

export default VueRouter