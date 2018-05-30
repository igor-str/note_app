import Vue from 'vue'
import Router from 'vue-router'

import List from './../components/List'
import AddItem from './../components/AddItem'
import EditIte from './../components/EditItem'

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
    },
    {
      path: '/edit',
      name: 'EditItem',
      component: EditIte
    }
  ]
})
