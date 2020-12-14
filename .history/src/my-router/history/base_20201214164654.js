class Base {
    constructor(router) {
        this.router = router
        this.current = createRoute(null,{
            path='/'
        })
    }
    // 根据路径渲染组件 数据变化 想更新视图
    transitionTo(location, cb) {
        cb && cb()
    }
}

export default Base