import mutations from './mutation'
import actions from './action'
import getters from './getters'

export default {
    state() {
        return {
            userId: null,
            token: null,
            // tokenExpiration: null,
            didOut: false,
        }
    },
    mutations,
    actions,
    getters,
}