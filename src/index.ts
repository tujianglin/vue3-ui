import { App } from 'vue';
import { forEach } from 'lodash-es';
import './components';
// antv 主题样式引入
import 'ant-design-vue/dist/antd.variable.min.css';

const moduleFiles = import.meta.globEager('./components/**/*.vue');
const components: any[] = [];

forEach(moduleFiles, (module) => {
  components.push(module.default);
});

export const createUI = () => ({
  install: (app: App) => {
    forEach(components, (component) => {
      app.component(component.name, component);
    });
  },
});
