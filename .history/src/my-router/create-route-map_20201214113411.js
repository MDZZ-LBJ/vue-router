function createRouteMap(routes) {

    let pathMap = Object.create(null)

    routes.forEach(route => {
        addRoutesRecord(route,pathMap)
    });

    function addRoutesRecord(){
        
    }

    return {
        pathMap
    }

}

export default createRouteMap