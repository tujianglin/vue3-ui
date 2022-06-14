# 树组件

## 基本用法

<demo src="./demo/tree/baseTree.vue" title="基本用法">
  <desc>最简单的用法，展示可勾选，可选中，禁用，默认展开等功能。</desc>
</demo>

## 操作菜单

<demo src="./demo/tree/menuTree.vue" title="操作菜单">
  <desc>鼠标移入节点上存在下拉操作按钮, 使用 `menu` 开启, `menuBtn` 自定义操作菜单按钮, `menuClick` 是操作按钮点击回调, treeNode 节点参数 `showMenu` 控制节点是否展示操作内容</desc>
</demo>

## 手风琴模式

<demo src="./demo/tree/accordionTree.vue" title="手风琴模式">
  <desc>使用 `accordion` 开启</desc>
</demo>

## 异步加载数据

<demo src="./demo/tree/loadTree.vue" title="异步加载数据">
  <desc>点击展开节点，动态加载数据</desc>
</demo>


## 自定义插槽

<demo src="./demo/tree/slotsTree.vue" title="自定义插槽">
  <desc>使用 `before` `after` 定义文案前后内容</desc>
</demo>

## 加载中&空数据

<demo src="./demo/tree/loadingTree.vue" title="加载中&空数据">
  <desc>使用 `loading` 定义数据是否需要加载动画</desc>
</demo>

## API

### Tree props

|  参数  | 说明 | 类型 | 默认值 |
|  ---- | ---- | ---- | ---- |
| menu | 显隐操作按钮 | `boolean` | false |
| menuBtn | 操作按钮 | `array` | [{key: string, value: string or v-slot}] |
| loading | 加载中 | `boolean` | false |
| emptyImage | 空状态图片 | `string` `v-slot` | - |
| accordion | 手风琴模式 | `boolean` | false |

### 事件

|  事件名称  | 说明 | 回调参数 |
|  ---- | ---- | ---- | 
| menuClick | 树操作按钮点击触发 | `boolean` | false |


### TreeNode
|  参数  | 说明 | 类型 | 默认值 |
|  ---- | ---- | ---- | ---- |
| showMenu | 节点显隐操作按钮 | `boolean` | true |

### Slots
|  插槽名称  | 说明 | 参数 |
|  ---- | ---- | ---- |
| before | 文本前内容 | `<template #before="{item}"></template>` |
| after | 文本前内容 | `<template #after="{item}"></template>` |

 