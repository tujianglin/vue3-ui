<template>
  <WMTree
    v-model:expandedKeys="expandedKeys"
    v-model:selectedKeys="selectedKeys"
    :load-data="onLoadData"
    :tree-data="treeData"
  />
</template>
<script lang="tsx" setup>
  import { ref } from 'vue';
  import type { TreeProps } from 'ant-design-vue';
  const expandedKeys = ref<string[]>([]);
  const selectedKeys = ref<string[]>([]);
  const treeData = ref([
    { title: 'Expand to load', key: '0' },
    { title: 'Expand to load', key: '1' },
    { title: 'Tree Node', key: '2', isLeaf: true },
  ]);
  const onLoadData: TreeProps['loadData'] = (treeNode: any) => {
    return new Promise((resolve) => {
      if (treeNode.dataRef.children) {
        resolve();
        return;
      }
      setTimeout(() => {
        treeNode.dataRef.children = [
          { title: 'Child Node', key: `${treeNode.eventKey}-0` },
          { title: 'Child Node', key: `${treeNode.eventKey}-1` },
        ];
        treeData.value = [...treeData.value];
        resolve();
      }, 1000);
    });
  };
</script>
