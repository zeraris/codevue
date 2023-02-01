<template>
  <button @click="increment">Add 3</button>
  <button @click="plusplus({value: 5})">Add 5</button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  methods: {
    // add() {
    //   this.$store.commit('plusplus', {value: 2}); this is only mutation
    // this.$store.dispatch('increment')
    // },
    ...mapActions(['increment', 'plusplus']),

    // this is also possible for mapaction and mapgetters
    // ...mapActions({
    //     inc: 'increment',
    //     p: 'plusplus'
    // })
  },
};
</script>
