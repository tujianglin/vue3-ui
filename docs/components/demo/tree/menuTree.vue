<template>
  <div id="app">
    <div style="margin-bottom: 16px">
      menu:
      <Switch v-model:checked="menu" />
    </div>
    <WMTree
      :tree-data="treeData"
      :menu="menu"
      :menu-btn="menuBtn"
      @menu-click="onMenuClick"
      :defaultExpandAll="true"
    />
  </div>
</template>
<script lang="tsx" setup>
  import { ref } from 'vue';
  import type { WMTreeProps } from 'tjl-ui';
  import { Switch } from 'ant-design-vue';
  import type { TreeProps } from 'ant-design-vue';

  const menu = ref(true);

  const treeData: TreeProps['treeData'] = [
    {
      title: 'parent 1',
      key: '0-0',
      children: [
        {
          title: 'parent 1-0',
          key: '0-0-0',
          children: [
            { title: 'leaf', key: '0-0-0-0' },
            { title: 'leaf', key: '0-0-0-1' },
          ],
        },
        {
          title: 'parent 1-1',
          key: '0-0-1',
          children: [{ key: '0-0-1-0', title: 'sss' }],
        },
      ],
    },
  ];

  const menuBtn = ref<WMTreeProps['menuBtn']>([
    {
      key: 'ADD',
      value: '添加',
    },
    {
      key: 'EDIT',
      value: '编辑',
    },
    {
      key: 'DELETE',
      value: '删除',
    },
  ]);

  const onMenuClick = (key: any) => {
    switch (key) {
      case 'ADD':
        console.log('ADD', key);
        break;
      case 'EDIT':
        console.log('EDIT', key);
        break;
      case 'DELETE':
        console.log('DELETE', key);
        break;
      default:
        break;
    }
  };
</script>
