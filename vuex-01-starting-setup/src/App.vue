<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <fav-val></fav-val>
    <button @click="addX">Add 7</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
  <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavVal from './components/FavVal.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavVal,
    UserAuth,
  },
  // computed: {
  //   counter() {
  //     return this.$store.state.counter
  //   }
  // },
  methods: {
    addX() {
      this.$store.dispatch('plusplus', { value: 7 });
      // this.$store.commit({ type: 'plusplus', value: 7 }); this is simmillar to above
    },
  },
  computed: {
    isAuth() {
        return this.$store.getters.userIsAuth
    }
 }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
