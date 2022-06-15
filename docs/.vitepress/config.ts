import { defineConfig } from 'vitepress';
import { vitePluginVitepressDemo } from 'vite-plugin-vitepress-demo';
import nav from './configs/nav';
import sidebar from './configs/sidebar';

export default defineConfig({
  lang: 'en-US',
  title: 'WM-UI',
  base: '/tjl-ui/',
  lastUpdated: true,
  themeConfig: {
    nav,
    sidebar,
  },
  vite: {
    plugins: [vitePluginVitepressDemo()],
  },
});
