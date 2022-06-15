import DefaultTheme from 'vitepress/theme';
import DemoBlock from 'vite-plugin-vitepress-demo/dist/demo/index.vue';
import { createUI } from 'tjl-ui';
import 'vite-plugin-vitepress-demo/dist/demo/code.css';
import 'tjl-ui/dist/style.css';
import './custom.css';

export default {
  enhanceApp({ app }) {
    app.use(createUI());
    app.component('demo', DemoBlock);
  },
  ...DefaultTheme,
};
