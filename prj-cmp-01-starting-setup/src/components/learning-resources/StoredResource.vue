<template>
  <ul>
    <learning-resource
      v-for="item in resources"
      :id="item.id"
      :key="item.id"
      :title="item.title"
      :desc="item.description"
      :link="item.link"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue'

export default {
  inject: ['resources'],
    components: {LearningResource},
   
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>