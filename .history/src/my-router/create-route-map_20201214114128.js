function createRouteMap(routes) {

    let pathMap = Object.create(null)

    routes.forEach(route => {
        addRoutesRecord(route, pathMap)
    });


    return {
        pathMap
    }

}

function addRoutesRecord(route, pathMap,parent) {
    let { path, component } = parent? `{parent.path}`:route
    let record = { // 有很多属性 这里核心属性是 path component
        path,
        component
    }
    // 根据路劲匹配记录
    pathMap[path] = record
    if (route.children) {
        routes.children.forEach(r => {
            addRoutesRecord(r, pathMap, record)
        });
    }
}


export default createRouteMap