export default {
    setUser(state,payload) {
        state.token = payload.token;
        state.userId = payload.userId;
        // state.tokenExpiration = payload.tokenExpitation;
        state.didOut = false
    },
    didOt(state) {
        state.didOut = true;
    }
}