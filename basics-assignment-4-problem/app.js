const app = Vue.createApp({
data() {
    return {
        inputClass: '',
        pIsVisible: true,
        inputBackgroundColor : ''
    }
},
computed:{
    paraClasses() {
        return {
            user1: this.inputClass === 'user1',
            user2: this.inputClass === 'user2',
            visible: this.pIsVisible,
            hidden: !this.pIsVisible
        }
    }
},
methods:{
 togglePVisible() {
    this.pIsVisible = !this.pIsVisible
 }
}
})

app.mount("#assignment")