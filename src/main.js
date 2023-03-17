import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootswatch/dist/cosmo/bootstrap.min.css'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import { token, setToken } from './token.js';

const app = createApp(App);

app.provide('token', token).provide('setToken', setToken).use(router).use(VueSweetalert2).mount('#app');
