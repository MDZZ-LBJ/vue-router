import Base from './base'

//确保有hash值
function ensureSlash() {
    if (window.location.hash) {
        return;
    }
    window.location.hash = '/'
}

class Hash extends Base {
    constructor(router) {
        super(router)
        ensureSlash()
    }
}

export default Hash