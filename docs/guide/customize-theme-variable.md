# 动态主题

无需在框架内引入, 因为组件库引入过了

``` js
import 'ant-design-vue/dist/antd.variable.min.css';
```

## 如何使用

用 `ConfigProvider` 包在元素顶层, 用法和官方文档保持一致, [文档地址](https://www.antdv.com/docs/vue/customize-theme-variable-cn)

``` vue
<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue'
ConfigProvider.config({
	theme: {
		primaryColor: 'pink'
	}
})
</script>

<template>
	<ConfigProvider>
    <router-view></router-view>
	</ConfigProvider>
</template>
```