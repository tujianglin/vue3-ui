# 快速上手

该组件库公司内部使用

::: info 使用之前要了解 vue3 和 ant-design-vue :::

## 安装组件

```md
pnpm add tjl-ui

# or

yarn add tjl-ui
```

## 使用组件

全局注册

```ts
import { createApp } from 'vue';
import App from './App.vue';
import { createUI } from 'tjl-ui';
import 'tjl-ui/dist/style.css';

const app = createApp(App);

app.use(createUI());

app.mount('#app');
```

## 引入类型

全局引入, 在 `tsconfig.json` 中配置

```json
{
  "compilerOptions": {
    // ...
    "types": ["tjl-ui"]
    // ...
  }
}
```
