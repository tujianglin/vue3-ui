import { App } from 'vue';
import { forEach } from 'lodash-es';

import * as components from './components';

export const createUI = () => ({
  install: (app: App) => {
    forEach(components, (component, name) => {
      app.component(name, component);
    });
  },
});
