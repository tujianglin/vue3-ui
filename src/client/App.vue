<template>
  <div>
    <WMTagList add-name="11" :list="list" />
  </div>
</template>
<script lang="tsx" setup>
  import { WMTagList } from '@/index';
  const list = [
    {
      label: '1',
      value: '1',
    },
    {
      label: '2',
      value: '2',
    },
    {
      label: '3',
      value: '3',
    },
  ];
  console.log(list);
</script>
<style lang="less" scoped></style>
