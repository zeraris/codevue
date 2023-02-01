export default {
    async contactCoach(context, payload) {
        const newReq = {
            userEmail: payload.email,
            message: payload.message
        }
       const data = await fetch(`https://vuecoachapp-1-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${payload.coachId}.json`, {
        method: 'POST',
        body: JSON.stringify(newReq),
       })
       const resData = await data.json()
       console.log(resData)
       if (!data.ok) {
        const error = new Error( resData.message || 'Failed to fetch data')
        throw error
       }
       
       newReq.id = resData.name
       newReq.coachId = payload.coachId
        context.commit('addRequests', newReq)
    },
    async fetchRequests(context) {
        
        const coachId = context.rootGetters.userId
        const token = context.rootGetters.token
        const data = await fetch(`https://vuecoachapp-1-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${coachId}.json?auth=${token}`)
        const resData = await data.json()
        console.log(resData)
        if (!data.ok) {
            const error = new Error( resData.message || 'Failed to load data')
            throw error
        }


        const requests = [];

        for (const id in resData) {
            const request = {
                id : id,
                coachId : coachId,
                userEmail : resData[id].userEmail,
                message : resData[id].message
            }
            console.log(request)
            requests.push(request)
        }
        context.commit('setRequests', requests)
    }
}