<template>
  <base-dialog :show="!!error" title="error occured" @close="errorHandler">
  <p>{{ error }}</p>
</base-dialog>
  <section>
    <coach-filter @change-filter="setFilters"></coach-filter>
  </section>
  <section>
  <base-card>
    <div class="controls">
      <base-button mode="outline" @click="loadCoaches(true)">Refresh</base-button>
      <base-button link to="/auth?redirect=register" v-if="!isLoggedIn">Login to register as a coach</base-button>
      <base-button link v-if="isLoggedIn && !isCoach && !isLoading" to="/register">Register as Coach</base-button>
    </div>
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
      <ul v-else-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        ></coach-item>
      </ul>
      <h3 v-else>No Coaches Found</h3>
  </base-card>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/Coach.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue'
export default {
  components: { CoachItem, CoachFilter },
  data() {
    return {
      error: null,
      isLoading: false,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      }
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuth;
    },
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter(coach => {
        if(this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if(this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if(this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false
      })
      
    },
    isCoach() {
        return this.$store.getters['coaches/isCoach']
    },
    hasCoaches() {
      // console.log(this.$store.getters['coaches/hasCoaches'])
      return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
    },
  },
  created() {
    this.loadCoaches()
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('coaches/loadCoaches', {forceRefresh: refresh})
      }
      catch (err) {
        console.log(err)
        this.error = err.message || 'Something went wrong'
      }
      this.isLoading = false;
    },
    errorHandler() {
      this.error = null
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.controls {
  display: flex;
  justify-content: space-between;
}
</style>