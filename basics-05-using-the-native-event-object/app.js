const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      // fullname: '',
      lastname: ''
    };
  },
  watch: {
    // name(value) {
    //   this.fullname = value + ' ' + 'Swissez'
    // }
    counter (value) {
      if (value > 50) {
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        },2000)
      }
    }
  },
  computed: {
    fullname() {
      if (this.name === "" || this.lastname === '') {
        return ""
      }
      return this.name + " " + this.lastname
    }

  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = ''
      this.lastname = ''
    }
  }
});

app.mount('#events');
