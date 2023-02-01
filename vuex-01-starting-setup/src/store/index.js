import {createStore} from 'vuex'

import RootMutation from './mutations'
import RootAction from './actions'
import rootGetters from './getters'
import counterModule from './counter/index'

const store= createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            isLoggedIn: false
        }
    },
    mutations: RootMutation
        // increment(state) {
        //     state.counter = state.counter + 3
        // },
        // plusplus(state, payload) {
        //     state.counter = state.counter + payload.value
        // },
        
    ,
    actions: RootAction,
    getters: rootGetters,
})

export default store