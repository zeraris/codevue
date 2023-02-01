export default {
    increment(state) {
        state.counter = state.counter + 3
    },
    plusplus(state, payload) {
        state.counter = state.counter + payload.value
    },
}