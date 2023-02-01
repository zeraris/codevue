<template>
  <li>
    <h2>{{ name }} {{ isFavourite === true ? "Liked" : "Disliked" }}</h2>
    <button @click="reverseFav">Like/Dislike</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="this.$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  // props: [
  //   'name',
  //   'phoneNumber',
  //   'emailAddress',
  //   'isFavourite'
  // ],
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    phoneNumber: String,
    emailAddress: String,
    isFavourite: {
      type: Boolean,
      required: false,
      default: true,
      validator: function (value) {
        return value === true || value === false;
      },
    },
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },

    reverseFav() {
      this.$emit("toggle-fav", this.id);
    },
  },
};
</script>
