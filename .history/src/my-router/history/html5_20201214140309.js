import Base from './base'

class Html5 extends Base {
    constructor(router) {
        super(router)
    }
    getCurrentLocation() {
        return window.location.pathname
    }
    setupListener() {
        window.addEventListener('popState', () => {
            this.transitionTo(this.getCurrentLocation())
        })
    }
}

export default Html5