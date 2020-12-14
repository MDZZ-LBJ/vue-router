function createRouteMap(routes) {

    let pathMap = Object.create(null)

    routes.forEach(route => {
        addRoutesRecord()
    });

    return {
        pathMap
    }

}

export default createRouteMap