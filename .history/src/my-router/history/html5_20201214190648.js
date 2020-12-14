import Base from './base'

class Html5 extends Base {
    constructor(router) {
        super(router)
    }
    getCurrentLocation() {
        return window.location.pathname
    }
    setupListener() {
        // popState 监控浏览器路径变化 (只有 前进 后退才能被监控)
        window.addEventListener('popstate', () => {
            this.transitionTo(this.getCurrentLocation())
        })
    }
    push(location) {
        // 这里的
        window.history.pushState({}, null, location)
    }
}

export default Html5