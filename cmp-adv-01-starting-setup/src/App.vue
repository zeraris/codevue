<template>
  <div>
    <TheHeader />
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goal #default="slotProps">
      <h2>{{ slotProps.item }}</h2>
      <p>{{ slotProps.anotherProp }}</p>
    </course-goal> -->
    <button @click="setSel('ActiveGoal')">Active Goals</button>
    <button @click="setSel('manage-goal')">Manage Goals</button>
    <!-- <ActiveGoal v-if="selected === 'ActiveGoal' "/>
    <manage-goal v-if="selected === 'manage-goal'"></manage-goal> -->
    <keep-alive>
      <component :is="selected"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
// import CourseGoal from "./components/CourseGoal.vue";
import ActiveGoal from "./components/ActiveGoal.vue";
import ManageGoal from "./components/ManageGoal.vue";

export default {
  components: {
    TheHeader,

    ActiveGoal,
    ManageGoal,
  },
  data() {
    return {
      selected: "ActiveGoal",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSel(cmp) {
      this.selected = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
