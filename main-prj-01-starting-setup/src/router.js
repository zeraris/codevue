import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue'
import CoachesList from './pages/coaches/CoachesList.vue'
import CoachRegister from './pages/coaches/CoachRegister.vue'

import ContactCoach from './pages/requests/ContactCoach.vue'
import RequestReceived from './pages/requests/RequestReceived.vue'
import Auth from './pages/auth/UserAuth.vue'
import store from './store/index'

import NotFound from './pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [{ path: 'contact', component: ContactCoach }],
    },
    { path: '/register', component: CoachRegister, meta: {reqAuth: true} },
    { path: '/requests', component: RequestReceived, meta: {reqAuth: true} },
    {path: '/auth', component: Auth, meta: {reqUnauth: true}},
    { path: '/:lostCatcher(.*)', component: NotFound },
  ],
});

router.beforeEach((to, _, next) => {
if (to.meta.reqAuth && !store.getters.isAuth) {
  next('/auth')
} else if (to.meta.reqUnauth && store.getters.isAuth) {
  next('/coaches')
}
  else {
    next()
  }
})

export default router
