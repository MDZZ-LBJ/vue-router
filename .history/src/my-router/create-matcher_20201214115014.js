import createRouteMap from './create-route-map'

/* 
     matcher 有两个功能
      。添加路由 在原有的路由基础上动态添加路由
      。匹配 根据路由匹配组件
*/
function createMatcher(routes) {

    let { pathMap } = createRouteMap(routes)

    function addRoutes(routes) {
        createRouteMap(routes, pathMap)
        console.log(pathMap)
    }

    function match(path) {

    }

    return {
        addRoutes,
        match,
    }

}
export default createMatcher