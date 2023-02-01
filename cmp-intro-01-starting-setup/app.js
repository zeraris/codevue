const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  data() {
    return {
      detailAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
    };
  },
  template: 
  `<li>
  <h2 >{{friend.name}}</h2>
  <button @click="toggleVisible">{{detailAreVisible? 'Hide' : 'Show'}} Details</button>
  <ul v-if="detailAreVisible">
    <li><strong>Phone:</strong> {{friend.phone}}</li>
    <li><strong>Email:</strong> {{friend.email}}</li>
  </ul>
</li>`
  ,
  methods: {
    toggleVisible() {
      this.detailAreVisible = !this.detailAreVisible;
    },
  },
});

app.mount("#app");
