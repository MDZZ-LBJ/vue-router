class Base {
    constructor(router) {
        this.router = router
    }
    transitionTo(location, cb) {
        // 根据路径匹配出对应的记录
        console.log(location)
        cb && handler()
    }
}

export default Base