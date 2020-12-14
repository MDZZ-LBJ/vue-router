import Base from './base'

class Html5 extends Base {
    constructor(router) {
        super(router)
    }
    getCurrentLocation() {
        return window.location.hash.slice(1)
    }
    setupListener() {

    }
}

export default Html5