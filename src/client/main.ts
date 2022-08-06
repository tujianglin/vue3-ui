import { createApp } from 'vue';
import App from './App.vue';
import { createUI, TButton } from '../index';
console.log(TButton);

createApp(App).use(createUI()).mount('#app');
