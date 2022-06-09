import { App } from 'vue';
import { forEach } from 'lodash-es';
import './components';

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
