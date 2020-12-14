class VueRouter {
    constructor(options) {
        this.mode = options.mode
        this.routes = options.routes
        console.log( this.mode , this.routes)
    }
}

VueRouter.install = function (Vue) {
    console.log('indec', Vue)
}

export default VueRouter