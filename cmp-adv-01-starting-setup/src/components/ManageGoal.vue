<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <teleport to="body">
    <error-alert v-if="!isValid">
    <h2>Input is Invalid!</h2>
    <p>Please write something..</p>
    <button @click="confirm">Okay</button>
    </error-alert>
  </teleport>
  </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue'
export default {
  components: {
    ErrorAlert
  },
  data() {
    return {
      isValid: true,
    }
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === '') {
        this.isValid = false
      }
    },
    confirm() {
      this.isValid = true
    }
  },
};
</script>
