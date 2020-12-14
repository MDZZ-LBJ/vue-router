class Base {
    constructor(router) {
        this.router = router
    }
    transitionTo(location, handler) {
       
        console.log(location)
        handler && handler()
    }
}

export default Base