import Base from './base'

//确保有hash值


class Hash extends Base {
    constructor(router) {
        super(router)
        ensureSlash()
    }
}

export default Hash