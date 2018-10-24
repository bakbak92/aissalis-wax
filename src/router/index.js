import Vue from 'vue'
import Router from 'vue-router'
import FaisTonWax from '@/components/FaisTonWax'
import Products from '@/components/Products'
import Panier from '@/components/Panier'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/faistonwax',
      name: 'FaisTonWax',
      component: FaisTonWax
    },
    {
      path: '/',
      name: 'Products',
      component: Products
    },
    {
      path: '/panier',
      name: 'Panier',
      component: Panier
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
