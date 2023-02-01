<template>
  <TransitionGroup tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </TransitionGroup>

  <div>
    <input type="text" ref="newUser" />
    <button @click="addUser">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['zen', 'max', 'julia', 'jabas', 'phytko'],
    };
  },
  methods: {
    addUser() {
      const enteredNewUser = this.$refs.newUser.value;
      this.users.unshift(enteredNewUser);
    },
    removeUser(user) {
      this.users = this.users.filter((x) => x !== user);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}
.user-list-enter-from {
  opacity: 0;
  transform: translateX(-40px)
}
.user-list-enter-active {
  transition: all 1.5s ease-out;
}
.user-list-enter-to, .user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.user-list-leave-active {
  transition: all 1.5s ease-in;
  position: absolute;
}

.user-list-leave-to {
  opacity: 0;
  transform: translateX(40px)
}
.user-list-move {
  transition: transform 1s ease;
}
</style>
