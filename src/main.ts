import { createApp } from 'vue'
import App from './App.vue'

import router from "./router/routes"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import { createPinia } from "pinia"

import Maska from "maska"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fas)

const app = createApp(App)
app.component("Icon", FontAwesomeIcon)
app.use(createPinia())
app.use(Maska)
app.use(router)
app.mount('#app')
