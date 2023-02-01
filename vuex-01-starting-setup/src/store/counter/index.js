import counterMutation from './mutations'
import counterAction from './actions'
import counterGetters from './getters'

const counterModule = {
    // namespaced: true,
    state() {
        return {
            counter: 0,
        }
    },
    mutations: counterMutation,
    actions: counterAction,
    getters: counterGetters,
};

export default counterModule