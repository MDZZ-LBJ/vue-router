import Base from './base'

class Html5 extends Base {
    constructor(router) {
        super(router)
    }
    getCurrentLocation() {
        return window.location.pathname
    }
    setupListener() {
        // hash 值就是监控hash的变化
        window.addEventListener('hashchange', () => {
            this.transitionTo(this.getCurrentLocation())
        })
    }
}

export default Html5