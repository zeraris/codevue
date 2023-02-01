export default {
    async registerCoach(context, data) {
         console.log(context)
        const userId = context.rootGetters.userId;
        const coachData = {
            // id: context.rootGetters.userId,
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        }
        const token = context.rootGetters.token
        const res = await fetch(`https://vuecoachapp-1-default-rtdb.asia-southeast1.firebasedatabase.app/coaches/${userId}.json?auth=` + token, {
        method: 'PUT',
        body: JSON.stringify(coachData)
        })

        // const resData = await res.json();
        console.log(res)
        // if (!res.ok) {

        // }
        // const responseData = await response.json();
        context.commit('registerCoach', {
            ...coachData, id: userId
        })
    },
    async loadCoaches(context, payload) {
        if (!payload.forceRefresh && !context.getters.shouldUpdate) {
            return;
        }
        const res = await fetch(`https://vuecoachapp-1-default-rtdb.asia-southeast1.firebasedatabase.app/coaches.json`);
        const resData = await res.json();
        if (!res.ok) {
        const error = new Error (resData.message || 'Failed to fetch')
        throw error 
        }
        const coaches = []
        for (const key in resData) {
            const coach = {
            id: key,
            firstName: resData[key].firstName,
            lastName: resData[key].lastName,
            description: resData[key].description,
            hourlyRate: resData[key].hourlyRate,
            areas: resData[key].areas
            };
            coaches.push(coach)
        }
        context.commit('setCoaches', coaches)
        context.commit('setFetchTimestamp')
    }
}