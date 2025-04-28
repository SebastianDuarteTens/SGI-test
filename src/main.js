import { createApp } from 'vue'
import {Quasar} from 'quasar'
import './style.css'
import App from './App.vue'
import {router} from "./routes/routes.js"

//Quasar icon libraries
import '@quasar/extras/material-icons/material-icons.css'

//Quasar css
import 'quasar/src/css/index.sass'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faXTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebookF, faXTwitter, faInstagram, faLinkedinIn, faFilePdf)

const app = createApp(App)

app.use(router)

app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  })

app.mount('#app')
app.component('font-awesome-icon', FontAwesomeIcon)