import { createApp, markRaw } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import { createPinia } from "pinia";
import "@/services/api";

const pinia = createPinia();
pinia.use(({store}) => {
    store.router = markRaw(router);
})
loadFonts()

createApp(App).use(router)
  .use(pinia)
  .use(vuetify)
  .mount('#app')
