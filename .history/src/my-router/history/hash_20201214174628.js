import Base from './base'

//确保有hash值  '/#'
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
        // 初始化后 先根据路径做一次匹配 后续hash值变化再次匹配
        window.addEventListener('hashchange', () => {
            this.transitionTo(this.getCurrentLocation())
        })
    }
    push(location) {
        window.location.hash = location
    }
}

export default Hash