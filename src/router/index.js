import Vue from 'vue'
import Router from 'vue-router'

import List from './../components/List'
import AddItem from './../components/AddItem'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/add',
      name: 'AddItem',
      component: AddItem
    }
  ]
})
