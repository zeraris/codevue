<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExp">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading the data...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!result || result.length === 0)">No stored result. please add some data</p>
      <ul v-else-if="!isLoading && result && result.length > 0">
        <survey-result
          v-for="result in result"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  data() {
    return {
      result: [],
      isLoading: false,
      error: null
    };
  },
  components: {
    SurveyResult,
  },
  methods: {
    loadExp() {
      this.isLoading = true;
      this.error = null;
      fetch(
        'https://stcodevue-default-rtdb.asia-southeast1.firebasedatabase.app/data.json'
      ).then((res) => {
        if(res.ok) {
          return res.json()
        }
      }).then((data) => {
        this.isLoading = false
        const result = [];
        for (const id in data) {
          result.push({
            id: id,
            name: data[id].name,
            rating: data[id].rating
          })
        }
        this.result = result
      }).catch((err) => {
        this.isLoading = false
        console.log(err)
        this.error = 'Please try again later (' + err + ')'
      });
    },
  },
  mounted() {
    this.loadExp()
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
