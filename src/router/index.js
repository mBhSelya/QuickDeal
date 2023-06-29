import { createRouter, createWebHistory } from 'vue-router'
import ToDoListHome from '../components/ToDoListHome.vue'
import Tasks from '../components/Tasks.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ToDoList',
      component: ToDoListHome
    },
    {
      path: '/tasks',
      name: 'tasks',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Tasks
    }
  ]
})

export default router
