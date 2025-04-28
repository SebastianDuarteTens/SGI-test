import Home from "../views/Home.vue"
import Company from "../views/Company.vue"
import Equipment from "../views/Equipment.vue"
import Contact from "../views/Contact.vue"
import MainLayout from "../layouts/MainLayout.vue"

import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
      path: '/',
      component: MainLayout,
      children: [
        { path: '', component: Home },
        { path: 'company', component: Company },
        { path: 'equipment', component: Equipment },
        { path: 'contact', component: Contact }
      ]
    }
  ]

export const router = createRouter({
    history:createWebHashHistory(),
    routes
})