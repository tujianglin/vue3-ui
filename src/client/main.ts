import { createApp } from 'vue';
import App from './App.vue';
import { createUI } from '../index';
// import 'tjl-ui/dist/style.css';

createApp(App).use(createUI()).mount('#app');
