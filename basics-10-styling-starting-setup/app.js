const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  computed: {
    boxAClasses () {
        return {active: this.boxASelected}
    }
  },
  methods: {
    boxSelected(box) {
        if (box === 'A') {
            return  this.boxASelected = !this.boxASelected
        }
        if (box === 'B') {
            return  this.boxBSelected = !this.boxBSelected
        }
        if (box === 'C') {
            return  this.boxCSelected = !this.boxCSelected
        }
    }
  },
});

app.mount("#styling");
