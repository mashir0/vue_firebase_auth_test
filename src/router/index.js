import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import HelloWorld from '@/components/HelloWorld'
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'
import Chatboard from '@/components/Chatboard'
import Form from '@/components/Form'

Vue.use(Router)

let router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '*',
      redirect: 'signin'
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: { requiresAuth: true }
    },
    {
      path: '/chatboard',
      name: 'Chatboard',
      components: {
        default: Chatboard,
        a: Form
      }
      // component: Chatboard
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ]
})

router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  let currentUser = firebase.auth().currentUser

  if (requiresAuth) {
    if (!currentUser) {
      next({
        path: '/signin',
        query: {redirectt: to.fullPath}
      })
    } else {
      next()
    }
  } else {
    next() // next()を常に呼び出すようにしてください。
  }
})

export default router
