import { createApp, VueElement } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import axios from 'axios';
import SpaceBetween from './components/SpaceBetween/index.vue';

import 'ant-design-vue/dist/antd.css';

VueElement.prototype.$axios = axios
createApp(App)
.use(store)
.use(router)
.use(Antd)
.component('space-between',SpaceBetween)
.mount('#app');
