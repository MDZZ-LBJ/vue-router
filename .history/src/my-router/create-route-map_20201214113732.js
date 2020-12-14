function createRouteMap(routes) {

    let pathMap = Object.create(null)

    routes.forEach(route => {
        addRoutesRecord(route, pathMap)
    });


    return {
        pathMap
    }

}

function addRoutesRecord(route, pathMap) {
    let { path, component } = route
    let record = { // 有很多属性 这里核心属性是 path component
        path,
        component
    }
    pathMap[path] = record
}


export default createRouteMap