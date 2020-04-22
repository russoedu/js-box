import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../components/List.vue'
import Add from '../components/Add.vue'
import Update from '../components/Update.vue'

Vue.use(VueRouter)

const routes = [
  {
    name: 'List',
    path: '/',
    component: List
  },
  {
    name: 'Add',
    path: '/add',
    component: Add
  },
  {
    path: '/update/:id',
    name: 'Update',
    component: Update
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
