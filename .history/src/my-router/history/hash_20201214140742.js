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
        return window.location.hash.slice(1)
    }
    setupListener() {
        // hash 值就是监控hash的变化
        window.addEventListener('hashchange', () => {
            console.log('hashchange', this.getCurrentLocation())
            this.transitionTo(this.getCurrentLocation())
        })
    }

}

export default Hash