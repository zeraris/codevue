<template>
  <button @click="handler">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      isSaved: false
    }
  },
  methods: {
    handler() {
      this.isSaved = true
    }
  },
  beforeRouteEnter(to,from,next) {
    console.log('before route enter component')
    console.log(to,from)
    next()
  },
  beforeRouteLeave(_,_2,next) {
    // used for confirming user who leave form data without being submited
    if (this.isSaved) {
      next()
    }
    else {
      const willLeave = confirm('Are you sure?')
      next(willLeave)
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>