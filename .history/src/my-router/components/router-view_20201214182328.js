export default {
    functional:true,
    name: 'router-view',
    render(h) { // 函数式组件 节省性能 缺陷就是没有实例
        return h()
    }
}