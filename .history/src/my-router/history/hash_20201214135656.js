import Base from './base'

//确保有hash值
function ensureSlash() {
    if (window.location.hash) { // 有兼容问题
        return;
    }
    window.location.hash = '/'
}

class Hash extends Base {
    constructor(router) {
        super(router)
        ensureSlash()
    }
    getCurrentLocation() {

    }
}

export default Hash