<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="">Name</label>
      <input type="text" v-model="name"/>
    </div>
    <div>
      <label for="">Phone</label>
      <input type="tel" v-model="phone"/>
    </div>
    <div>
      <label for="">Email</label>
      <input type="email" v-model="email"/>
    </div>
    <button>Add Contact</button>
  </form>
</template>

<script>
export default {
    emits: ['add-new'],
    data() {
        return {
            name: '',
            phone: '',
            email: '',
        }
    },
    methods: {
        submitData() {
            this.$emit('add-new', this.name, this.phone, this.email)
        }
    }
}
</script>


