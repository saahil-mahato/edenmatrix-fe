import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config';
import Lara from '@primevue/themes/lara';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(PrimeVue, {
    // Default theme configuration
    theme: {
        preset: Lara,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
 });

app.use(createPinia())
app.use(router)

app.mount('#app')
