import { createApp } from 'vue';
import App from './App.vue';
import { createUI } from 'tjl-ui';
import 'tjl-ui/dist/style.css';

createApp(App).use(createUI()).mount('#app');
