const app = Vue.createApp({
    data() {
        return {
            list: [],
            inputValue: '',
            taskIsVisible: true
        }
    },
    computed:{
        checkVisible() {
          return this.taskIsVisible ? 'hide list' : 'show list'
        }
    },
    methods: {
        addList() {
            this.list.push(this.inputValue)
        },
        toggleTaskVisible() {
            this.taskIsVisible = !this.taskIsVisible
        }
    }
})

app.mount('#assignment')