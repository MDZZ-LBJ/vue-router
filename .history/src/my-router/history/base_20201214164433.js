class Base {
    constructor(router) {
        this.router = router
    }
    // 根据路径渲染组件 数据变化 更新视图
    transitionTo(location, cb) {
        cb && cb()
    }
}

export default Base