//theme
import '@/assets/themes/material/material-light/standard/indigo/theme.scss';
    
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
