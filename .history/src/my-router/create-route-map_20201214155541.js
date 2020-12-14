function createRouteMap(routes, oldPathMap) {
    // oldPathMap 动态添加路由时用到
    
    let pathMap = oldPathMap || Object.create(null)

    routes.forEach(route => {
        addRoutesRecord(route, pathMap)
    });

    console.log(pathMap)

    return {
        pathMap
    }

}

function addRoutesRecord(route, pathMap, parent) {
    let path = parent ? `${parent.path}/${route.path}` : route.path
    let record = { // 有很多属性 这里核心属性是 path component
        path,
        component: route.component
    }
    // 根据路劲匹配记录
    pathMap[path] = record
    if (route.children) {
        route.children.forEach(r => {
            addRoutesRecord(r, pathMap, record)
        });
    }
}


export default createRouteMap