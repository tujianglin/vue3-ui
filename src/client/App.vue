<template>
  <div>
    <WMTree
      v-model:selectedKeys="selectedKeys"
      :expanded-keys="expandedKeys"
      :tree-data="treeData"
      defaultExpandAll
    />
  </div>
</template>
<script lang="tsx" setup>
  import { ref } from 'vue';
  import { WMTree } from '@/index';
  const treeData = ref([
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
  ]);
  const expandedKeys = ref<string[]>([]);
  const selectedKeys = ref<string[]>(['0-0-0', '0-0-1']);
</script>
<style lang="less" scoped></style>
