<template>
    <base-dialog :show="!!error" title="error occured" @close="errorHandler">
  <p>{{ error }}</p>
</base-dialog>
    <section>
        <base-card>
        <header>
            <h2>Request Received</h2>
        </header>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-else-if="hasReq && !isLoading">
            <ReqItem v-for="req in receivedReq" :key="req.id" :email="req.userEmail" :message="req.message"></ReqItem>
        </ul>
        <h3 v-else>You dont have any request</h3>
        </base-card>
    </section>
</template>

<script>
import ReqItem from '../../components/requests/RequestsItem.vue'
export default {
    components: {ReqItem},
    data() {
      return {
        isLoading : false,
        error: null,
      }
    },
    computed: {
        receivedReq() {
          return this.$store.getters['requests/requests']
        },
        hasReq() {
            return this.$store.getters['requests/hasReq']
        }
    },
    created() {
      this.loadRequests()
    },
    methods: {
      async loadRequests() {
        this.isLoading = true;
        try {
          await this.$store.dispatch('requests/fetchRequests')
        }
        catch(err) {
          this.error = err.message || 'Something went wrong'
        }
        this.isLoading = false;
      },
      errorHandler() {
        this.error = null
      }

    }
}
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>