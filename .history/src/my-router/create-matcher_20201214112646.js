/* 
     matcher 有两个功能
      。添加路由 在原有的路由基础上动态添加路由
      。匹配 根据路由匹配组件
*/
function createMatcher(routes) {

    createRoutesMap(routes)

    function addRoutes(routes) {

    }

    function match(path) {

    }

    return {
        addRoutes,
        match,
    }

}
export default createMatcher