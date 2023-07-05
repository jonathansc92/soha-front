//theme
import "primevue/resources/themes/md-light-indigo/theme.css";     
    
//core
import "primevue/resources/primevue.min.css";

import '/node_modules/primeflex/primeflex.css';

import '@/assets/main.scss';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue);
app.use(router)

app.mount('#app')
