export default {
    functional: true,// 函数式组件 节省性能 缺陷就是没有实例
    name: 'router-view',
    render(h, { data, parent }) {
        // 函数式组件 这里面没有this
        let route = parent.$route;
        let depth = 0
        let records = route.matched
        return h(records[depth])
    }
}