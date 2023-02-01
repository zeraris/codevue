export default {
    login(ctx) {
        ctx.commit('setAuth', {isAuth: true})
    },
    logout(ctx) {
        ctx.commit('setAuth', {isAuth: false})
    }
}