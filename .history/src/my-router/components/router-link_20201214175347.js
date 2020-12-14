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
       let tag = this.tag
       return <tag onClick={
           ()=>this.$router.push(this.to)
       }></tag>
    }
}