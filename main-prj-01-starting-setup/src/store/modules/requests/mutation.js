export default {
    addRequests(state,payload) {
        console.log(payload)
        state.requests.push(payload)
    },
    setRequests(state, payload) {
        state.requests = payload
    }
}