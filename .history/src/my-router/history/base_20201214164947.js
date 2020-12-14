function createRoute(record, location) {
    let res = []
    return {
        ...location,
        matched: res
    }
}

class Base {
    constructor(router) {
        this.router = router;
        this.current = createRoute(null, {
            path='/'
        })
    }
    // 根据路径渲染组件 数据变化 想更新视图
    transitionTo(location, cb) {
        cb && cb()
        // 根据跳转的路径获取匹配的记录
        this.router
    }
}

export default Base