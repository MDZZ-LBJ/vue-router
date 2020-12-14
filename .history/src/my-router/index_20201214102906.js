class VueRouter {
   constructor(options){
      this.mode = options.mode
      this.routes = options.routes
   }
}

VueRouter.install = function (Vue) {
  console.log('indec',Vue)
}

export default VueRouter