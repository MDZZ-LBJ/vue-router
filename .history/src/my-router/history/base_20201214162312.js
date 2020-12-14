class Base {
    constructor(router) {
        this.router = router
    }
    transitionTo(location, handler) {
        // 根据路径匹配出对应的记录
        // 初始化后 先根据
        console.log(location)
        handler && handler()
    }
}

export default Base