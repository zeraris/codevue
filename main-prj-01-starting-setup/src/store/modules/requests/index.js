import mutations from './mutation'
import actions from './action'
import getters from './getters'

export default {
    namespaced: true,
    state() {
        return {
            requests: []
        }
    },
    actions,
    mutations,
    getters
}