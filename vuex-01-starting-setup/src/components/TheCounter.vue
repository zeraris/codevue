<template>
    <h3>{{ finalCounter }}</h3>
    <!-- if used in templae -> $store.state.counter -->
</template>

<script>
import {mapGetters} from 'vuex'
export default {
 computed: {
    // counter() {
    //     return this.$store.getters.finalCounter
    // }
    ...mapGetters(['finalCounter'])
 }
}
</script>