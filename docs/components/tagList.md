# 标签列表

## 基础用法

<demo src="./demo/tagList/baseTagList.vue"  title="基本用法">
 <desc>最简单的用法，展示 `add` `edit` `delete` `tagClick` 事件使用。</desc>
</demo>

## 展开更多

<demo src="./demo/tagList/moreTagList.vue"  title="展开更多">
 <desc>最简单的用法，展示 `loading` `moreClick` `total` 的使用。</desc>
</demo>

## 自定义插槽

<demo src="./demo/tagList/slotsTagList.vue"  title="自定义插槽">
 <desc>最简单的用法，展示 `header` `title` `icon` 插槽的使用。</desc>
</demo>

## API

### TagList props

|  参数  | 说明 | 类型 | 默认值 |
|  ---- | ---- | ---- | ---- |
| loading | 加载中 | `boolean` | false |
| addName | 添加按钮文案 | `string` `v-slot` | - |
| list | 标签列表数据 | `array` | [] |
| total | 标签列表总数 | `number` | 0 |
| width | 标签文案宽度 | `string` | 80px |

### 事件

|  事件名称  | 说明 | 回调参数 |
|  ---- | ---- | ---- | 
| add | 点击添加按钮触发 | `() => void` |
| edit | 点击编辑按钮触发 | `(item, index) => void` |
| delete | 点击删除按钮触发 | `(item, index) => void` |
| moreClick | 点击展开按钮触发 | `() => void` |
| tagClick | 点击标签触发 | `(item, index) => void` |

### Slots
|  插槽名称  | 说明 | 参数 |
|  ---- | ---- | ---- |
| title | 文案内容 | `<template #title="{v, i}"></template>` |
| header | 列表头部 | `<template #header></template>` |
| icon | 文案前的icon | `<template #icon="{v, i}"></template>` |

