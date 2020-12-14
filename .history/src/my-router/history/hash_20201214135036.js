import Base from './base'

//确保有

class Hash extends Base {
    constructor(router) {
        super(router)
        ensureSlash()
    }
}

export default Hash