// import { createRouter } from 'vue-router'

// const routes = [];

// const router = createRouter({
//   routes,
// });

// export default router;

import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [],
})

export default router;
