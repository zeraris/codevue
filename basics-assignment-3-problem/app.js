const app = Vue.createApp({
    data() {
        return {
            counter: 0,

        }
    },
    computed:{
        result() {
            if (this.counter < 37) {
                return "not yet"
            }
            else if (this.counter === 37) {
                return this.counter
            } else {
                return "too much"
            }
        }
    },
    watch:{
        result() {
            console.log("watcher excecuting...")
            const that = this
            setTimeout(function() {
                that.counter = 0
            },5000)
        }
    },
    methods: {
        addCount(num) {
            this.counter = this.counter + num
        }
    }
})
app.mount('#assignment')