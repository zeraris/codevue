import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';

import AllUser from './pages/AllUsers.vue'
import CourseGoal from './pages/CourseGoal.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', component: AllUser},
        {path:'/goal', component: CourseGoal}
    ]
})

const app = createApp(App);

app.component('base-modal', BaseModal);

app.use(router)
router.isReady().then(() => {app.mount('#app');})

