export default {
    name: 'router-link',
    props: {
        to: {
            type: String,
            required: true
        },
        tag: {
            type: String,
            default: 'a',
        }
    },
    render(h) {
        // return h(this.tag, {}, this.$slots.default)
        let tag = this.tag
        let to = this.to
        return <tag onClick={
            () => this.$router.push(to)
        }>{this.$slots.default}\
        </tag>
    }
}