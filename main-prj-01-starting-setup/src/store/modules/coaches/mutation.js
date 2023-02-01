export default {
    registerCoach(state, payload) {
        console.log(payload)
        state.coachesList.push(payload);
    },
    setCoaches(state, payload) {
        state.coachesList = payload;
    },
    setFetchTimestamp(state) {
        state.lastFetch = new Date().getTime();
    }
}