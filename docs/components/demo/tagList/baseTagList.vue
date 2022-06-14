<template>
  <WMTagList
    addName="添加版本号"
    :list="list"
    width="120"
    @add="handleAdd"
    @edit="handleEdit"
    @delete="handleDelete"
    @tag-click="handleTag"
  >
    <template #title="{ v, i }">内容: {{ v.label }} 下标: {{ i }}</template>
  </WMTagList>
</template>
<script lang="tsx" setup>
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
  const handleAdd = () => {
    console.log('添加版本号');
  };
  const handleEdit = (item) => {
    console.log('编辑标签', item);
  };
  const handleDelete = (item) => {
    console.log('删除标签', item);
  };
  const handleTag = (item) => {
    console.log('点击标签', item);
  };
</script>
<style lang="less" scoped></style>
