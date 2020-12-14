function createRouteMap(routes, oldPathMap) {
    /* 
       一个参数时是初始化 2个参数时是动态添加路由
       oldPathMap 动态添加路由时用到
    */
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
    // 儿子路径不能以 / 开头 ，否则不拼接 当做一级路由
    let path = parent ? `${parent.path}/${route.path}` : route.path
    let record = { // 有很多属性 这里核心属性是 path component
        path,
        parent,// 父记录
        component: route.component,
        name: route.name,
        props: route.props,
        meta: route.meta
    }
    // 根据路劲匹配记录
    if (!pathMap[path]) {
        pathMap[path] = record
    }
    if (route.children) { // 递归遍历
        route.children.forEach(childRoute => {
            addRoutesRecord(childRoute, pathMap, record)
        });
    }
}


export default createRouteMap