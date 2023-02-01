const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "understand vue in single day",
      courseGoalB: "<h2>make a great vue Apps!</h2>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
