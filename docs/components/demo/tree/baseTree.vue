<template>
  <div id="app">
    <WMTree :option="option" menu :menu-btn="['ADD', 'EDIT', 'DELETE']" :max-length="100" />
  </div>
</template>
<script lang="tsx" setup>
  import { reactive } from 'vue';
  import type { TreeProps } from 'ant-design-vue';
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
    {
      title: 'parent 2',
      key: '1-0',
      children: [
        {
          title: 'parent 2-0',
          key: '1-0-0',
        },
        {
          title: 'parent 2-1',
          key: '2-0-1',
        },
      ],
    },
  ];

  const option = reactive<TreeProps>({
    treeData,
  });
</script>
<style lang="less" scoped></style>
