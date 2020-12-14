import Base from './base'

class Hash extends Base {
    constructor(router) {
        super(router)
        ensureSlash()
    }
}

export default Hash