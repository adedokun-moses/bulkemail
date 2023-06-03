import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import wysiwyg from "vue-wysiwyg";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

if (sessionStorage.getItem("token") & sessionStorage.getItem("token") != "" & sessionStorage.getItem("token") != "undefine") {
    let token = sessionStorage.getItem("token")
    setAuthHeader(token)
}

createApp(App).use(store).use(wysiwyg, {}).use(vuetify).use(router).mount('#app')
