class Base {
    constructor(router) {
        this.router = router
    }
    transitionTo(location, handler) {
        // 根据路径匹配出对应的记录
        handler()
    }
}

export default Base