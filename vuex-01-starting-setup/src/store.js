import {createStore} from 'vuex'

const counterModule = {
    // namespaced: true,
    state() {
        return {
            counter: 0,
        }
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 3
        },
        plusplus(state, payload) {
            state.counter = state.counter + payload.value
        },
    },
    actions: {
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
    },
    getters: {
        finalCounter(state) {
            return state.counter * 2
        },
        normalizeCounter(_, getters) {
            const finalCounter = getters.finalCounter
            if (finalCounter < 0) {
                return 0
            }
            if (finalCounter > 100) {
                return 100
            }
            return finalCounter
        },
    }
};

const store= createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            isLoggedIn: false
        }
    },
    mutations: {
        // increment(state) {
        //     state.counter = state.counter + 3
        // },
        // plusplus(state, payload) {
        //     state.counter = state.counter + payload.value
        // },
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth
        }
    },
    actions: {
        login(ctx) {
            ctx.commit('setAuth', {isAuth: true})
        },
        logout(ctx) {
            ctx.commit('setAuth', {isAuth: false})
        }
    },
    getters: {
        userIsAuth(state) {
            return state.isLoggedIn
        }
    }
})

export default store