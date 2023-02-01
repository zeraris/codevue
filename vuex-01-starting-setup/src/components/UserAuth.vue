<template>
    <button @click="login" v-if="!isAuth">Login</button>
    <button @click="logout" v-else>Logout</button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
 methods: {
    ...mapActions(['login', 'logout'])
 },
 computed: {
    isAuth() {
        return this.$store.getters.userIsAuth
    }
 }
}
</script>