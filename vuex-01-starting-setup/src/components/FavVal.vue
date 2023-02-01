<template>
    <h4>{{ counter }}</h4>
</template>

<script>
export default{
    computed: {
        counter() {
            return this.$store.getters.normalizeCounter
        }
    }
}
</script>