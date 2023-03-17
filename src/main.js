import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import 'vue-fullpage.js/dist/style.css';
import VueFullPage from 'vue-fullpage.js';

createApp(App).use(VueFullPage).mount('#app');
