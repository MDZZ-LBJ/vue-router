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

function runQuene(queue, interator, cb) {
    function next(index) {
        if (index >= queue.length) {
            return cb() // 一个钩子都没有 或者 所有的钩子都执行完毕 直接调用cb渲染
        } else {
            let hook = queue[index]
            interator(hook, () => {
                next(index + 1)
            })
        }
    }
    next(0)
}

export default class Base {
    constructor(router) {
        this.router = router;
        this.cb = null
        this.current = createRoute(null, {
            path: '/'
        })
    }
    // 根据路径渲染组件 数据变化 想更新视图
    transitionTo(location, onComplete) {
        // 根据跳转的路径获取匹配的记录
        let route = this.router.match(location)
        let queue = [].concat(this.router.beforeEachHooks)
        function interator(hook, cb) {
            hook(route, this.current, cb)
        }
        runQuene(queue, interator, () => {
            this.current = route
            this.cb && this.cb(route) // 这里渲染  
            onComplete && onComplete()
        })
    }
    listen(cb) {
        this.cb = cb
    }
}


