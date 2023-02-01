import { createRouter, createWebHistory } from 'vue-router';
import TeamList from './pages/TeamsList.vue';
import UserList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamFooter from './components/teams/TeamsFooter.vue';
import UserFooter from './components/users/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      // {path: '/', redirect: '/teams' },
      {
        name: 'team',
        path: '/teams',
        meta: {needAuth: true},
        components: { default: TeamList, footer: TeamFooter },
        alias: '/',
        children: [
          {
            name: 'team-members',
            path: ':teamId',
            component: TeamMembers,
            props: true,
          },
        ],
      },
      {
        path: '/users',
        components: { default: UserList, footer: UserFooter },
        beforeEnter(to, from, next) {
          console.log('before enter');
          console.log(to, from);
          next();
        },
      },
      { path: '/:notFound(.*)', component: NotFound },
    ],
    // linkActiveClass: 'active',
    scrollBehavior(to, from, saved) {
      if (saved) {
        return saved;
      }
      return { left: 0, top: 0 };
    },
  });
  
  router.beforeEach((_, _2, next) => {
      console.log('Before Each Global')
      next()
  })
  
  // router.afterEach((to,from) => {
  //     sending analytic data
  
  // })

  export default router