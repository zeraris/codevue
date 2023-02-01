const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    add() {
      this.counter++
    },
    reduce(num) {
      this.counter = this.counter - num
    },
    setName(e) {
      this.name = e.target.value
    },
    submitHandler(event) {
     alert('sent!')
    },
    
  }
});

app.mount('#events');
