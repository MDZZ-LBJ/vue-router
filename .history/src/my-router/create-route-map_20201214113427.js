function createRouteMap(routes) {

    let pathMap = Object.create(null)

    routes.forEach(route => {
        addRoutesRecord(route,pathMap)
    });

   
    return {
        pathMap
    }

}

export default createRouteMap