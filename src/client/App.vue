<template>
  <div>
    <WMTree v-model:expandedKeys="expandedKeys" :option="option" menu :menuBtn="menuBtn">
      <template #titleIcon> 111 </template>
    </WMTree>
  </div>
</template>
<script lang="tsx" setup>
  import { WMTree } from '@/index';
  import type { WMTreeProps } from '@/index';
  import type { TreeProps } from 'ant-design-vue';
  import { reactive, ref } from 'vue';
  const treeData: any[] = [
    {
      name: 'parent 1',
      id: '0-0',
      children: [
        {
          name: 'parent 1-0',
          id: '0-0-0',
          disabled: true,
          children: [
            { name: 'leaf', id: '0-0-0-0', disableCheckbox: true },
            { name: 'leaf', id: '0-0-0-1' },
          ],
        },
        {
          name: 'parent 1-1',
          id: '0-0-1',
          children: [{ id: '0-0-1-0', name: 'sss' }],
        },
      ],
    },
  ];
  const expandedKeys = ref(['0-0-0', '0-0-1']);
  const menuBtn = ref<WMTreeProps['menuBtn']>([
    {
      key: 'ADD',
      value: '新增',
    },
    {
      key: 'EDIT',
      value: '编辑',
    },
  ]);
  const option = reactive<TreeProps>({
    treeData,
    showLine: true,
    fieldNames: { title: 'name', key: 'id' },
  });
</script>
<style lang="less" scoped></style>
