import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootswatch/dist/cosmo/bootstrap.min.css'

import { token, setToken } from './token.js';

const app = createApp(App);

app.provide('token', token).provide('setToken', setToken).use(router).mount('#app');
