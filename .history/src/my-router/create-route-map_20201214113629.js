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
    let {path} = route
    let record = {
        name:route.name,
        path: route.path,
        component: route.component
    }
    pathMap[path] = return
}


export default createRouteMap