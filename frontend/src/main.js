import { createApp } from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router/index';
import store from './store';

const app = createApp(App);
app.config.globalProperties.$axios = axios;

createApp(App).use(store).use(router).mount('#app');
