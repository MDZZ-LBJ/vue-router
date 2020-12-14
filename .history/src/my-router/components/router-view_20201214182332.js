export default {
    functional: true,// 函数式组件 节省性能 缺陷就是没有实例
    name: 'router-view',
    render(h) {
        return h()
    }
}