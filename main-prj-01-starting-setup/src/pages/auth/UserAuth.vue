<template>
  <div>
    <base-dialog :show="!!error" title="An error occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog fixed :show="isLoading" title="Authenticating...">
      <!-- <p>Authenticating...</p> -->
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">E-mail</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <p v-if="!formIsValid">
          Please write valid email and password (min length 8 characters)
        </p>
        <base-button>{{ switchButton }}</base-button>
        <base-button type="button" mode="flat" @click="switchMode">{{
          switchButtonCaption
        }}</base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null,
    };
  },
  computed: {
    switchButton() {
      if (this.mode === 'login') {
        return 'Login';
      } else {
        return 'Sign Up';
      }
    },
    switchButtonCaption() {
      if (this.mode === 'login') {
        return 'Sign Up instead';
      } else {
        return 'Login Instead';
      }
    },
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (
        this.email.length === '' ||
        !this.email.includes('@') ||
        this.password.length === 8
      ) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;
      try {
        if (this.mode === 'login') {
          await this.$store.dispatch('login', {
            email: this.email,
            password: this.password,
          });
        } else {
          await this.$store.dispatch('signup', {
            email: this.email,
            password: this.password,
          });
        }
        const redUrl = '/' + (this.$route.query.redirect || 'coaches')
        this.$router.replace(redUrl)
      } catch (err) {
        this.error = err.message || 'failed to authenticate. try again later';
      }

      this.isLoading = false;
    },
    switchMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  /* border: 1px solid #ccc;
  border-radius: 12px; */
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
