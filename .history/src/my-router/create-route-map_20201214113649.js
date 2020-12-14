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
    let { path,component } = route
    let record = {

        path: route.path,
        component: route.component
    }
    pathMap[path] = record
}


export default createRouteMap