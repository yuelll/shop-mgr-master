import { createRouter, createWebHashHistory } from 'vue-router';


const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth/index.vue'),
  },
   {
     path: '/',
     name: 'BasicLayout',
     component: () => import(/* webpackChunkName: "BasicLayout" */ '../layout/BasicLayout/index.vue'),
     children: [
      {
        path: '/shops',
        name: 'Shops',
        component: () => import(/* webpackChunkName: "Shops" */ '../views/Shops/index.vue'),
       },
      //  {
      //   path: 'users',
      //   name: 'User',
      //   component: () => import(/* webpackChunkName: "User" */ '../views/User/index.vue'),
      //  },
     ],
   },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;


