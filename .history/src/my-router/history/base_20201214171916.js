export function createRoute(record, location) {
    let res = []
    if (record) {
        while (record) {
            res.unshift(record) // 向前添加 先渲染父组件
            record = record.parent
        }
    }
    return {
        ...location,
        matched: res
    }
}

export default class Base {
    constructor(router) {
        this.router = router;
        this.current = createRoute(null, {
            path: '/'
        })
    }
    // 根据路径渲染组件 数据变化 想更新视图
    transitionTo(location, onComplete) {
        // 根据跳转的路径获取匹配的记录
        let route = this.router.match(location)
        this.current = route
        this.cb(route)
        onComplete && onComplete()
    }
    listen(cb) {
        this.cb = cb
    }
}


