<template>
  <div style="margin-bottom: 16px">
    accordion:
    <Switch v-model:checked="accordion" />
  </div>
  <WMTree :treeData="treeData" :accordion="accordion" />
</template>
<script lang="tsx" setup>
  import { ref, watch } from 'vue';
  import { Switch } from 'ant-design-vue';
  import type { TreeProps } from 'ant-design-vue';

  const expandedKeys = ref<string[]>([]);
  const accordion = ref(true);

  watch(expandedKeys, () => {
    console.log('expandedKeys', expandedKeys);
  });

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
</script>
