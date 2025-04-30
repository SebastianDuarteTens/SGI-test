import Home from "../views/Home.vue"
import Company from "../views/Company.vue"
import Equipment from "../views/Equipment.vue"
import Contact from "../views/Contact.vue"
import MainLayout from "../layouts/MainLayout.vue"
import Facebook from "../views/fb.vue"
import Intagram from "../views/ig.vue"
import LinkedIn from "../views/lkdn.vue"
import X from "../views/x.vue"
import Youtube from "../views/yt.vue"

import { createRouter, createWebHashHistory } from "vue-router"
import { biYoutube } from "@quasar/extras/bootstrap-icons"

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
    },
    {
      path: '/facebook',
      name: 'Facebook',
      component: Facebook
    },
    {
      path: '/instagram',
      name: 'Instagram',
      component: Intagram
    },
    {
      path: '/linkedin',
      name: 'LinkedIn',
      component: LinkedIn
    },
    {
      path: '/x',
      name: 'X',
      component: X
    },
    {
      path: '/youtube',
      name: 'Youtube',
      component: Youtube
    }
  ]

export const router = createRouter({
    history:createWebHashHistory(),
    routes
})