export default {
    increment(context) {
        setTimeout(() => {
             context.commit('increment')
        }, 2500)
       
    },
    plusplus(context, payload) {
        setTimeout(() => {
            context.commit('plusplus', payload)
        })
    },
    // this works because namespaced
    // login() {}
}