<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';

export default {
  components: {
    TheHeader
  },
  computed: {
    didAoutOt() {
      console.log('hey')
      return this.$store.getters.didOt
    }
  },
  created() {
    this.$store.dispatch('tryLogin')
  },
  watch: {
    didAoutOt(current, old) {
      // console.log(current, old)
      if (current && current !== old) {
        console.log('work?')
       this.$router.replace('/coaches')
      }
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>