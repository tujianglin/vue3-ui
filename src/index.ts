import { App } from 'vue';
import { forEach } from 'lodash-es';

const modulesFiles = import.meta.globEager('./components/**/*.vue');
const pathList: any[] = [];

forEach(modulesFiles, (module) => {
  pathList.push(module);
});

export const createUI = () => ({
  install: (app: App) => {
    forEach(pathList, (path) => {
      const component = path.default;
      app.component(component.name, component);
    });
  },
});
