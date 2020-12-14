class Base {
    constructor(router) {
        this.router = router
    }
    transitionTo(location, handler) {
        // 根据路径匹配出对应的记录
        console.log(location)
        handler()
    }
}

export default Base