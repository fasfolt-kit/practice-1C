import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Course from './pages/Course.vue'

export default createRouter({
  history: createWebHashHistory(), // нужно для GitHub Pages
  routes: [
    { path: '/', component: Home },
    { path: '/course/:id', component: Course },
  ],
  scrollBehavior: () => ({ top: 0 }),
})
